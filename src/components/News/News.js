import React, { Component } from 'react';
import NewsItems from '../NewsItems/NewsItems';
import Spinner from '../Spinner/Spinner';
import propTypes from "prop-types";

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
            loading: false,
            page: 1
        };
        document.title = this.props.newsType;
    }
    updateNew = async () =>
    {
        const url = `https://newsapi.org/v2/top-headlines?country=${ this.props.country }&category=${ this.props.category }&apiKey=${ this.props.setApi }&page=${ this.state.page }&pageSize=${ this.props.pageSize }`;
        this.setState( { loading: true } );
        const data = await fetch( url );
        const parsed = await data.json();
        this.setState( { articles: parsed.articles, loading: false } );
    };

    async componentDidMount ()
    {
        this.updateNew();
    }

    handlePrev = async () =>
    {
        this.setState( { page: this.state.page - 1 } );
        this.updateNew();
    };

    handleNext = async () =>
    {
        this.setState( { page: this.state.page + 1 } );
        this.updateNew();

    };
    render ()
    {
        return (
            <div className="container my-3">
                <h1 className="text-center">News Today- { this.props.newsType } Top-Headlines</h1>
                <div className="row">
                    { this.state.loading && <Spinner /> }
                    {
                        this.state.loading ? "" : !this.state.loading && this.state.articles.map( article => ( <div className="col-md-4" key={ article.url }>
                            <NewsItems title={ article.title ? article.title : "" } description={ article.description ? article.description : "" } url={ article.url } urlToImage={ article.urlToImage } author={ article.author } publishedAt={ article.publishedAt } source={ article.source.name } />
                        </div> ) )
                    }
                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={ this.state.page === 1 } className="btn btn-dark" onClick={ this.handlePrev }>&larr; Previous</button>
                        <button type="button" disabled={ this.state.page > Math.ceil( this.state.totalResults / this.props.pageSize ) } className="btn btn-dark" onClick={ this.handleNext }>Next &rarr;</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
