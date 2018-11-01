import React, { Component } from 'react';
import { Tabs, Tab } from "react-bootstrap";
import '../App.css';

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.props = props;
        this.toggleTab = this.toggleTab.bind(this);
    }

    toggleTab(e) {
        console.log(e);
        this.props.AppUpdateState({page: e});
    }

    render() {
        return (
                <div>
                        <Tabs id="pages" acti={"Dashboard"} onSelect={this.toggleTab}>
                            <Tab eventKey={"Dashboard"}>Dashboard</Tab>
                            <Tab eventKey={"Recommendations"}>Recommendations</Tab>
                            <Tab eventKey={"Friends"}>Friends</Tab>
                        </Tabs>
                </div>
        );
    }
}

export default Navigation;