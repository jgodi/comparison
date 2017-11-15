import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catNames: [
        'Ginger',
        'Sparkles',
        'Mr. Snuffles',
        'Nikita',
        'Mrs. Napper',
        'Nappy McNappyton'
      ]
    };
    this.createCard = this.createCard.bind(this);
  }

  createCard(cat) {
    return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img src="http://thecatapi.com/api/images/get?format=src&type=gif"/>
          <span className="card-title">{cat}</span>
        </div>
        <div className="card-content">
          <p>Soft kitty, warm kitty, little ball of fur</p>
        </div>
        <div className="card-action">
          <a href="#">View This Cat!</a>
        </div>
      </div>
    </div>
    );
  }

  render() {
    let cards = this.state.catNames.map(this.createCard);
    console.log('C', cards);
    return (
      <div className="row">
        {cards}
      </div>
    );
  }
}

export default App;
