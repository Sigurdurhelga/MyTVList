import React, { Component } from 'react';
import '../../App.css';
import TopPicks from '../TopPicks/TopPicks';
import RecommendPicks from '../RecommendPicks/RecommendPicks';

class Recommendations extends Component {
    render() {
        return (
            <div>
            <TopPicks />
            <RecommendPicks />
            </div>
        );
    }
}

export default Recommendations;