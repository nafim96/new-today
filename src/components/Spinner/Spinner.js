import React, { Component } from 'react';
import loading from "./load.gif";

export class Spinner extends Component
{
    render ()
    {
        return (
            <div className="text-center">
                <img className="my-3" src={ loading } alt="" />
            </div>
        );
    }
}

export default Spinner;
