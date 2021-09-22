import React, { Component } from 'react';

export class Footer extends Component
{
    render ()
    {
        return (
            <div className="mt-3">
                <footer style={ { textAlign: "center", margin: "0 auto", backgroundColor: " #180b0b", height: "30px", color: "#ffffff", padding: "5px" } }>All Right Reserved { `${ new Date().getFullYear() } ${ new Date().getDay() === 1 ? "Monday" : new Date().getDay() === 2 ? "Tuesday" : new Date().getDay() === 3 ? "Wednesday" : new Date().getDay() === 4 ? "Thursday" : new Date().getDay() === 5 ? "Friday" : new Date().getDay() === 6 ? "Saturday" : new Date().getDay() === 7 ? "Sunday" : "day is coming!!!" } ${ new Date().getDate() } ${ new Date().getMonth() === 0 ? "January" : new Date().getMonth() === 1 ? "February" : new Date().getMonth() === 2 ? "March" : new Date().getMonth() === 3 ? "April" : new Date().getMonth() === 4 ? "May" : new Date().getMonth() === 5 ? "June" : new Date().getMonth() === 6 ? "July" : new Date().getMonth() === 7 ? "August" : new Date().getMonth() === 8 ? "September" : new Date().getMonth() === 9 ? "October" : new Date().getMonth() === 10 ? "November" : new Date().getMonth() === 11 ? "December" : "" }` }</footer>
            </div>
        );
    }
}

export default Footer;
