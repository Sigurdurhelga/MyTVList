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
                    <h3>Game of Thrones</h3>
                    <p>Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="/konosuba.jpg" />
                    <Carousel.Caption>
                    <h3>Konosuba</h3>
                    <p>It was a happy day for Kazuma - right up to the moment he died. A goddess intervenes and offers him a second chance in a magical land.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        );
    }
}

export default TopPicks;