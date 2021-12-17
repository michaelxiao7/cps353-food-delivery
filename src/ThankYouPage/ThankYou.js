import React, { Component } from 'react';
import './ThankYou.css';
import { MenuButton } from './../App.js';

class ThankYou extends Component {

  constructor(props) {
    super(props);
    this.state = {
      verse: "",
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch("https://labs.bible.org/api/?passage=random&type=json")
      .then(verse => verse.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          verse: json[0],
        })
      })
  }

  render() {
    let { isLoaded, verse } = this.state;

    if(!isLoaded){
      return <div>Please standby...</div>;
    }

    else {
      return(
        <div className="Container">
          <h1 className="Header">Thank you for your order!</h1>
          <p className="Verse">
            {verse.bookname} {verse.chapter}:{verse.verse} - {verse.text}
          </p>
          <h2 className="Note">We appreciate you supporting our small business.
          Here is your complimentary, randomized bible verse while you wait for your food :)</h2>
          <h2 className="Note">Your food will be delivered in: 21 minutes</h2>
          <MenuButton />
        </div>
      );
    }
  }
}

export default ThankYou;