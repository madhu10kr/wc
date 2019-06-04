import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css'
import Header from '../Navbar'
import ServiceSectionOne from './BannerSection/Banner'
import ServiceSectionTwo from './Latestprojects/LatestProjects'
import ServiceSectionThree from './ImageSection/ImageSection'
import Footer from '../SectionSeventh/SectionSeventh'
import {Tabs,Tab,Sonnet} from 'react-bootstrap'
AOS.init();

export default class Firstsec extends Component {
	state={
bannerheader:"All Services",
home:"HOME",
protfolio:"PORTFOLIO",
currentpage:"All Services",
}


    render() {
        return (
		
		<div className="App">
<ServiceSectionOne 
bannerheader={this.state.bannerheader}
home={this.state.home}
protfolio={this.state.protfolio}
currentpage={this.state.currentpage}
/>
<Header/>
<ServiceSectionTwo/>
<br>
</br>

<div style={{marginLeft:"4%",marginRight:"4%"}}>
<Tabs defaultActiveKey="all" className="lineremoval" transition={false} id="noanim-tab-example">
<Tab eventKey="all" title="All Services">
<ServiceSectionThree data="all"/>
</Tab>
<Tab eventKey="design" title="Vacant">
<ServiceSectionThree data="Vacant"/>
</Tab>
<Tab eventKey="interior" title="Occupied">
<ServiceSectionThree data="Occupied"/>
</Tab>
<Tab eventKey="design1" title="Individuals">
<ServiceSectionThree data="Individuals"/>
</Tab>
<Tab eventKey="design2" title="Brokers">
<ServiceSectionThree data="Brokers"/>
</Tab>
<Tab eventKey="design3" title="Real Estate">
<ServiceSectionThree data="Real Estate"/>
</Tab>

</Tabs>
</div>
<Footer/>
</div>

		)
	}
}