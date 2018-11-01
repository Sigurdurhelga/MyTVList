import React, { Component } from 'react';
import '../../App.css';
import {Carousel} from 'react-bootstrap';

class TopPicks extends Component {
    render() {
        return (
            /*
                TODO AUTOMATICALLY GET RECOMMENDATIONS VIA RECOMMENDATION ENGINE
            */
            <Carousel className="top-recommendations">
                <Carousel.Item>
                    <img width={900} height={500} alt="Chuck" src="/Chuck.jpg" />
                    <Carousel.Caption>
                    <h3>Chuck</h3>
                    <p>Charles Charmicael is a living computer, giving him the abilities and looks of a greek god.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="/got.jpg" />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="/konosuba.jpg" />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        );
    }
}

export default TopPicks;