import React, { Component } from 'react';
import NewsItems from '../NewsItems/NewsItems';
import Spinner from '../Spinner/Spinner';
import propTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component
{
    static defaultProps = {
        country: "bg",
        pageSize: 8,
        category: "general",
        newsType: "General",
    };
    static propTypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string,
        newsType: propTypes.string,
    };
    constructor( props )
    {
        super( props );
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        };
        document.title = this.props.newsType;
    }
    updateNew = async () =>
    {
        const url = `https://newsapi.org/v2/top-headlines?country=${ this.props.country }&category=${ this.props.category }&apiKey=${ this.props.setApi }&page=${ this.state.page }&pageSize=${ this.props.pageSize }`;
        this.setState( { loading: true } );
        const data = await fetch( url );
        const parsed = await data.json();
        this.setState( { articles: parsed.articles, totalResults: parsed.totalResults, loading: false } );
    };

    async componentDidMount ()
    {
        this.updateNew();
    }

    // handlePrev = async () =>
    // {
    //     this.setState( { page: this.state.page - 1 } );
    //     this.updateNew();
    // };

    // handleNext = async () =>
    // {
    //     this.setState( { page: this.state.page + 1 } );
    //     this.updateNew();

    // };
    fetchMoreData = async () =>
    {
        this.setState( { page: this.state.page + 1 } );

        const url = `https://newsapi.org/v2/top-headlines?country=${ this.props.country }&category=${ this.props.category }&apiKey=${ this.props.setApi }&page=${ this.state.page }&pageSize=${ this.props.pageSize }`;
        this.setState( { loading: true } );

        const data = await fetch( url );
        const parsed = await data.json();

        this.setState( { articles: this.state.articles.concat( parsed.articles ), totalResults: parsed.totalResults, loading: false } );
    };
    render ()
    {
        return (
            <>
                <h1 className="text-center">News Today- { this.props.newsType } Top-Headlines</h1>
                {
                    this.state.loading && <Spinner />
                }
                <InfiniteScroll
                    dataLength={ this.state.articles.length }
                    next={ this.fetchMoreData }
                    hasMore={ this.state.articles.length !== this.state.totalResults }
                    loader={ <Spinner /> }
                    endMessage={
                        !this.state.loading && <p style={ { textAlign: 'center' } }>
                            <b>WoW! You have seen it all { this.props.newsType } -News</b>
                        </p>
                    }
                >
                    <div className="container">
                        <div className="row">
                            {
                                this.state.articles.map( article => ( <div className="col-md-4" key={ article.url }>
                                    <NewsItems title={ article.title ? article.title : "" } description={ article.description ? article.description : "" } url={ article.url } urlToImage={ article.urlToImage } author={ article.author } publishedAt={ article.publishedAt } source={ article.source.name } />
                                </div> ) )
                            }
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                            <button type="button" disabled={ this.state.page === 1 } className="btn btn-dark" onClick={ this.handlePrev }>&larr; Previous</button>
                            <button type="button" disabled={ this.state.page > Math.ceil( this.state.totalResults / this.props.pageSize ) } className="btn btn-dark" onClick={ this.handleNext }>Next &rarr;</button>
                        </div> */}
            </>
        );
    }
}

export default News;
