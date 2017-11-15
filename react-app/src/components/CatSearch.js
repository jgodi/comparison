import React, { Component } from 'react';
import axios from 'axios';

class CatSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catImageSrc: 'http://thecatapi.com/api/images/get?format=src&type=gif'
    };
    this.generateNewCat = this.generateNewCat.bind(this);
  }

  generateNewCat() {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      this.setState({
        catImageSrc: res.data.message
      });
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img src={this.state.catImageSrc}/>
              <span className="card-title">Cat Attack!</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={this.generateNewCat}><i className="material-icons">autorenew</i></a>
            </div>
            <div className="card-content">
              <p>Click the refresh to get a new cat image!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CatSearch;
