import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'

import CatList from "./components/CatList";
import CatSearch from "./components/CatSearch";

class App extends Component {
  render() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Cat App</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to='/' exact activeClassName="active">List</NavLink></li>
                        <li><NavLink to='/search' activeClassName="active">Search</NavLink></li>
                    </ul>
                </div>
            </nav>
            <main>
                <Switch>
                    <Route exact path='/' component={CatList}/>
                    <Route path='/search' component={CatSearch}/>
                </Switch>
            </main>
        </div>
    );
  }
}

export default App;
