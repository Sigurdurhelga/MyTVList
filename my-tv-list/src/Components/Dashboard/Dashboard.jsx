import React, { Component } from 'react';
import '../App.css';
import UpcomingEpisodes from "../UpcomingEpisodes/UpcomingEpisodes";

class Dashboard extends Component {
    render() {
        return (
            <UpcomingEpisodes></UpcomingEpisodes>
        );
    }
}

export default Dashboard;