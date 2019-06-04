import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './HomeStageSectionThree.css';
import Slideimg1 from '../../images/Homestagesec3.jpg';
import Slideimg2 from '../../images/Homestagesec3a.jpg';
import Slideimg3 from '../../images/Homestagesec3b.jpg';

export default class Homestagesectionthree extends Component {
    render() {
        return (
            <div>
                <div className="container p-5 slide-section">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-sty"
                            src={Slideimg1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <span>Featured 1st Sold Home</span>
                            <h3 className="pt-3">First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.vel scelerisque nisl consectetur.vel scelerisque nisl consectetur.</p>
                            <a>-view</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-sty"
                            src={Slideimg2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <span>Featured 2nd Sold Home</span>
                            <h3 className="pt-3">Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.vel scelerisque nisl consectetur.vel scelerisque nisl consectetur.</p>
                            <a>-view</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-sty"
                            src={Slideimg3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <span>Featured 3rd Sold Home</span>
                            <h3 className="pt-3">Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.vel scelerisque nisl consectetur.vel scelerisque nisl consectetur.</p>
                            <a>-view</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
        </div>
        )
    }
}
