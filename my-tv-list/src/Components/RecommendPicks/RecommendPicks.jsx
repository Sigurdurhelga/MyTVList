import React, { Component } from 'react';
import '../../App.css';
import jsonData from './picks.json';
import Pick from '../Pick/Pick';

class TopPicks extends Component {

  constructor() {
    super();
    var jsonPicks = [];
    for(var i = 0; i < jsonData.length; i++){
      jsonPicks.push(jsonData[i]);
    }

    this.state = {
      picks: jsonPicks
    };
  }

    render() {
      console.log("rendering recommendpicks");
        return (
          <div className='picks-area'>
            {this.state.picks.map((item,ind) => <Pick key={ind} Title={item.Title} ImgLink={item.ImgLink} />)}
          </div>
        );
    }
}

export default TopPicks;