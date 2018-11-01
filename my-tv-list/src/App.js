import React, { Component } from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import Recommendations from "./Components/Recommendations/Recommendations";
import Friends from "./Components/Friends/Friends";

import {Tabs, Tab} from "react-bootstrap";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Dashboard"
        };
    };

    render() {
        return (
            <div>
                <Tabs id="pages" activeKey={this.state.page} onSelect={(e) => {this.setState({page: e})}}>
                    <Tab eventKey={"Dashboard"} title="Dashboard">
                        <Dashboard></Dashboard>
                    </Tab>
                    <Tab eventKey={"Recommendations"} title="Recommendations">
                        <Recommendations></Recommendations>                    
                    </Tab>
                    <Tab eventKey={"Friends"} title="Friends">
                        <Friends></Friends>
                    </Tab>
                </Tabs>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous" />
      </div >
    );
    }
}

export default App;
