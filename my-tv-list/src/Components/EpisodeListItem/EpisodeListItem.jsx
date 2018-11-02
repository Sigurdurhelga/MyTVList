import React, { Component } from 'react';
import '../../App.css';
import { Panel } from "react-bootstrap";

class EpisodeListItem extends Component {
    render() {
        return (
            <Panel eventKey={this.props.episodeName}>
                <Panel.Heading>
                    <Panel.Title toggle>
                        {this.props.show} Season {this.props.season}, Episode {this.props.episode}: {this.props.episodeName}
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    <div>
                        "{this.props.description}"
                    </div>
                    <div>
                        Episode premiered on {this.props.airdate}
                    </div>
                </Panel.Body>
            </Panel>
        );
    }
}

export default EpisodeListItem;