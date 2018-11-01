import React, { Component } from 'react';
import '../../App.css';
import { ListGroupItem } from "react-bootstrap";

class EpisodeListItem extends Component {
    render() {
        return (
            <ListGroupItem header={this.props.show}>
                Season {this.props.season}, Episode {this.props.episode}, "{this.props.episodeName}"
            </ListGroupItem>
        );
    }
}

export default EpisodeListItem;