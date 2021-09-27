import React, { Component } from 'react';

export class NewsItems extends Component
{

    render ()
    {
        const { title, description, url, urlToImage, author, publishedAt, source } = this.props;
        return (
            <div className="card my-3" >
                <div style={ { display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" } }>
                    <span className=" badge rounded-pill bg-danger">
                        { source }
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <img src={ !urlToImage ? "https://t1.ldh.be/MWO32NuEXmcV9HvLUvwXWYJAbZI=/1280x640/6144cebf9978e263d97bb3a3.jpg" : urlToImage } style={ { height: "220px" } } className="card-img-top " alt="news Pic" />
                <div className="card-body">
                    <h5 className="card-title">{ title.slice( 0, 40 ) }...<span className="badge rounded-pill bg-info">New</span></h5>
                    <p className="card-text">{ !description ? "We can't found initial any description so that we showing some static description in our news page." : description.slice( 0, 90 ) }... </p>
                    <p className="card-text"><small className="text-muted">By { !author ? "Unknown" : author } on { new Date( publishedAt ).toUTCString() } Times ago</small></p>
                    <a rel="noreferrer" href={ url } target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        );
    }
}

export default NewsItems;
