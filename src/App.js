import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export class App extends Component
{
  constructor( params )
  {
    super();
    this.state = {
      value: 3,
      country: "be",
      api: "ea54278051f84078a47ef170118fd2dc"
    };
  }

  handlePageSize = async ( e ) =>
  {
    const pageValue = await Number( e.target.value );
    this.setState( { value: pageValue } );
  };
  handleCountry = async ( e ) =>
  {
    const countryValue = await e.target.value;
    this.setState( { country: countryValue } );
  };
  handleApi = async ( e ) =>
  {
    const setApi = await e.target.value;
    this.setState( { api: setApi } );
  };
  render ()
  {
    return (
      <div>
        <Router>
          <div className="mb-3">
            <Navbar handlePageSize={ this.handlePageSize } handleCountry={ this.handleCountry } handleApi={ this.handleApi } />
            <Switch>
              <Route exact path="/home">
                <News setApi={ this.state.api } key="general" newsType="General" pageSize={ this.state.value } country={ this.state.country } category="general" />
              </Route>
              <Route exact path="/business">
                <News setApi={ this.state.api } key="business" newsType="Business" pageSize={ this.state.value } country={ this.state.country } category="business" />
              </Route>
              <Route exact path="/entertainment">
                <News setApi={ this.state.api } key="entertainment" newsType="Entertainment" pageSize={ this.state.value } country={ this.state.country } category="entertainment" />
              </Route>
              <Route exact path="/general">
                <News setApi={ this.state.api } key="general" newsType="General" pageSize={ this.state.value } country={ this.state.country } category="general" />
              </Route>
              <Route exact path="/health">
                <News setApi={ this.state.api } key="health" newsType="Health" pageSize={ this.state.value } country={ this.state.country } category="health" />
              </Route>
              <Route exact path="/science">
                <News setApi={ this.state.api } key="science" newsType="Science" pageSize={ this.state.value } country={ this.state.country } category="science" />
              </Route>
              <Route exact path="/sports">
                <News setApi={ this.state.api } key="sports" newsType="Sports" pageSize={ this.state.value } country={ this.state.country } category="sports" />
              </Route>
              <Route exact path="/technology">
                <News setApi={ this.state.api } key="technology" newsType="Technology" pageSize={ this.state.value } country={ this.state.country } category="technology" />
              </Route>
              <Route exact path="/">
                <News setApi={ this.state.api } key="general" newsType="General" pageSize={ this.state.value } country={ this.state.country } category="general" />
              </Route>
            </Switch>

          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
