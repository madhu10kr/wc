import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeStageSectionSix.css';
import Testimonialimg1 from '../../images/Testimonialimg1.jpg';
import Testimonialimg2 from '../../images/Testimonialimg2.jpg';
import Testimonialimg3 from '../../images/Testimonialimg3.jpg';
import Hillhome from '../../images/Hillhome.png';

export default class Homestagesectionsix extends Component {
    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <div className="slide-testimonials">
                            <Carousel>
                                <Carousel.Item>
                                    <img className="d-block img-testi" src={Testimonialimg1} alt="First slide" />
                                    <Carousel.Caption>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.vel scelerisque nisl consectetur.vel scelerisque nisl consectetur.</p>
                                        <small>Written by:</small>
                                        <p className="font-weight-bold">John Stone</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block img-testi" src={Testimonialimg2} alt="Third slide" />
                                    <Carousel.Caption>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.vel scelerisque nisl consectetur.vel scelerisque nisl consectetur.</p>
                                        <small>Written by:</small>
                                        <p className="font-weight-bold">Salome Simoes</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block img-testi" src={Testimonialimg3} alt="Third slide" />
                                    <Carousel.Caption>
                                        <p>Vel scelerisque nisl consectetur.vel scelerisque nisl consectetur.vel scelerisque nisl consectetur.</p>
                                        <small>Written by:</small>
                                        <p className="font-weight-bold">Eugenia Anders</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 hill-home p-0">
                        <div className="img-div-hill h-75">
                            <img className="hill-home-img" src={Hillhome} alt="Hill Home" />
                        </div>
                        <div className="item-div-hill">
                            <h6 className="pl-4 pt-3">HOME ON THE HILL</h6>
                            <a className="pl-4">-View</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
