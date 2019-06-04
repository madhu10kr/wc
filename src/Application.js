import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/AboutPage/About'
import Service from './component/ServicesPage/Service';
import Details from './component/Details/Details';
import Portfolio from './component/Portfolio/Portfolio';

export default class Firstsec extends Component {
    render() {
        return (
		<div>
		<Router>
		<Route path="/" exact component={Home}/>
		<Route path="/about" exact component={About}/>
		<Route path="/service" exact component={Service}/>
		<Route path="/details" exact component={Details}/>
		<Route path="/portfolio" exact component={Portfolio}/>
		</Router>
		
		</div>
		)
	}
}