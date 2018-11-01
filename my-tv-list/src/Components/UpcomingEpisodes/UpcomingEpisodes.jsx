import React, { Component } from 'react';
import '../../App.css';
import { ListGroup } from "react-bootstrap";
import EpisodeListItem from "../EpisodeListItem/EpisodeListItem";

class UpcomingEpisodes extends Component {
    render() {
        return (
            <ListGroup>
                <EpisodeListItem show="Chuck" season={1} episode={1} episodeName={"Chuck versus the Intersect"}/>
                <EpisodeListItem show="Chuck" season={1} episode={2} episodeName={"Chuck versus the Helicopter"}/>
                <EpisodeListItem show="Chuck" season={1} episode={3} episodeName={"Chuck versus the Tango"}/>
            </ListGroup>
        );
    }
}

export default UpcomingEpisodes;