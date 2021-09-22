import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component
{
    render ()
    {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            <div className="d-flex justify-content-between">
                                <li className="nav-item my-2 text-white nav-link">
                                    Change-News-List
                                    <select className="text-center" onChange={ this.props.handlePageSize }>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                    </select>
                                </li>
                                <li className="nav-item my-2 text-white nav-link">
                                    Change-Country
                                    <select className="text-center" onChange={ this.props.handleCountry }>
                                        <option value="ae">Arab Emirates </option>
                                        <option value="ar">Argentina</option>
                                        <option value="at">Austria</option>
                                        <option value="au">Australia</option>
                                        <option value="be">Belgium</option>
                                        <option value="bg">Bulgaria</option>
                                        <option value="br">Brazil</option>
                                        <option value="ca">Canada</option>
                                        <option value="ch">Chile</option>
                                        <option value="cn">China</option>
                                        <option value="co">Colombia</option>
                                        <option value="cu">Cuba</option>
                                        <option value="cz">Czech Republic</option>
                                        <option value="de">Germany</option>
                                        <option value="eg">Egypt</option>
                                        <option value="fr">France</option>
                                        <option value="gb">United Kingdom</option>
                                        <option value="gr">Greece</option>
                                        <option value="hk">Hong Kong</option>
                                        <option value="hu">Hungary</option>
                                        <option value="id">Indonesia</option>
                                        <option value="ie">Ireland</option>
                                        <option value="il">Israel</option>
                                        <option value="in">India</option>
                                        <option value="it">Italy</option>
                                        <option value="jp">Japan</option>
                                        <option value="kr">South Korea</option>
                                        <option value="lt">Lithuania</option>
                                        <option value="lv">Latvia</option>
                                        <option value="ma">Morocco</option>
                                        <option value="mx">Mexico</option>
                                        <option value="my">Malaysia</option>
                                        <option value="ng">Nigeria</option>
                                        <option value="nl">Netherlands</option>
                                        <option value="no">Norway</option>
                                        <option value="nz">New Zealand</option>
                                        <option value="ph">Philippines</option>
                                        <option value="pl">Poland</option>
                                        <option value="pt">Portugal</option>
                                        <option value="ro">Romania</option>
                                        <option value="rs">Serbia</option>
                                        <option value="ru">Russia</option>
                                        <option value="sa">Saudi Arabia</option>
                                        <option value="se">Sweden</option>
                                        <option value="sg">Singapore</option>
                                        <option value="si">Slovenia</option>
                                        <option value="sk">Slovakia</option>
                                        <option value="th">Thailand</option>
                                        <option value="tr">Turkey</option>
                                        <option value="tw">Taiwan</option>
                                        <option value="ua">Ukraine</option>
                                        <option value="us">United States</option>
                                        <option value="ve">Venezuela</option>
                                        <option value="za">South Africa</option>
                                        <option value="bd">Bangladesh</option>
                                    </select>
                                </li>
                                <li className="nav-item my-2 text-white nav-link">
                                    Change-Api
                                    <select className="text-center" onChange={ this.props.handleApi }>
                                        <option value="ea54278051f84078a47ef170118fd2dc">API-1</option>
                                        <option value="c66e3c225c9b4c368189f7046dd0a4f7">API-2</option>
                                        <option value="b044f94007bd498b9d9c2a64974859b6">API-3</option>
                                    </select>
                                </li>
                            </div>
                        </ul>
                    </div>

                </div>
            </nav>

        );
    }
}

export default Navbar;
