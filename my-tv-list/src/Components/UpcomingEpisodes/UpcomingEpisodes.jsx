import React, { Component } from 'react';
import '../../App.css';
import { PanelGroup } from "react-bootstrap";
import EpisodeListItem from "../EpisodeListItem/EpisodeListItem";

class UpcomingEpisodes extends Component {
    render() {
        return (
            <PanelGroup accordion id="episodes-panelgroup">
                <EpisodeListItem show="Chuck" season={1} episode={1} episodeName="Chuck versus the Intersect" description="Chuck Bartowski is a computer geek that gets catapulted into a new career as the government's most vital secret agent. When Chuck opens an e-mail subliminally encoded with government secrets, he unwittingly downloads an entire server of sensitive data into his brain. With the government's most precious secrets in Chuck's head, Major John Casey of the National Security Agency assumes the responsibility of protecting him. His partner is the CIA's top agent (and Chuck's first date in years), Sarah Walker." airdate="September 24, 2007"/>
                <EpisodeListItem show="Chuck" season={1} episode={2} episodeName="Chuck versus the Helicopter" description="The Government wants to verify the secrets are inside Chuck's head. So they send a doctor who programmed the Intersect system to examine Chuck. When the doctor's car explodes, there's evidence one of the agencies was involved, leaving Chuck unsure whom to trust." airdate="October 1, 2007"/>
                <EpisodeListItem show="Chuck" season={1} episode={3} episodeName="Chuck versus the Tango" description="A stolen piece of art is the key for locating a weapon's dealer. Chuck's up for a promotion to assistant manager at work." airdate="October 8, 2007"/>
            </PanelGroup>
        );
    }
}

export default UpcomingEpisodes;