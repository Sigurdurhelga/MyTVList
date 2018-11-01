import React, { Component } from 'react';
import '../../App.css';
import { Panel } from "react-bootstrap";

class EpisodeListItem extends Component {
    render() {
        return (
            <Panel header={this.props.show} eventKey={this.props.episodeName}>
                <Panel.Heading>
                    <Panel.Title toggle>
                        {this.props.show}: Season {this.props.season}, Episode {this.props.episode}, "{this.props.episodeName}"
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    Aired on {this.props.airdate}
                    {this.props.description}
                </Panel.Body>
            </Panel>
        );
    }
}

export default EpisodeListItem;