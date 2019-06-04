import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './SectionThird.css';
import Slideimg1 from '../../images/Homestagesec3.jpg';
import Slideimg2 from '../../images/Homestagesec3a.jpg';
import Slideimg3 from '../../images/Homestagesec3b.jpg';

export default class Homestagesectiontop extends Component {
render() {
return (
<div>
<div className="top-bg-slide">
<Carousel>
<Carousel.Item>
<img className="d-block w-100 h-100 grey-clr" src={Slideimg1} alt="First slide"/>
</Carousel.Item>
<Carousel.Item>
<img className="d-block w-100 h-100 grey-clr" src={Slideimg2} alt="Third slide"/>
</Carousel.Item>
<Carousel.Item>
<img className="d-block w-100 h-100 grey-clr" src={Slideimg3} alt="Third slide"/>
</Carousel.Item>
</Carousel>
<div className="top-silde-item">
<div className="mobilevieww"> 
<small className="text-white">ARCHITECTURE</small>
<h1 className="pt-4 text-white txt-sty">Isolated Post<br/>Modern Prefab</h1>
<p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> 
incididunt ut labore det dolore magna.
</p>
</div>
<div className="pt-5 mt-5 text-white">
<a className="soci-lk"><i class="fab fa-facebook-square"></i></a>
<a className="soci-lk"><i class="fab fa-twitter-square"></i></a>
<a className="soci-lk"><i class="fab fa-instagram"></i></a>
</div>
</div>
</div>
</div>
)
}
}
