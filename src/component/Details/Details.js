import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './details.css'
import Header from '../Navbar'
import ServiceSectionOne from '../../component/ServicesPage/BannerSection/Banner'
import ServiceSectionTwo from '../../component/ServicesPage/Latestprojects/LatestProjects'
import ServiceSectionThree from '../../component/ServicesPage/ImageSection/ImageSection'
import Footer from '../../component/SectionSeventh/SectionSeventh';
import { withRouter } from 'react-router'

import { Tabs, Tab, Sonnet } from 'react-bootstrap'
AOS.init();


class Details extends Component {
    state = {
        bannerheader: this.props.location.data.data.para,
        // home: "HOME",
        protfolio: "HOME",
        currentpage: this.props.location.data.data.para,
    }

    handleClick = (e) => {
        console.log('details', e.target);
        this.props.history.push('/service')
    }

    render() {
        // console.log(this.props.location.data.data)
        return (

            <div className="App">
                <ServiceSectionOne
                    bannerheader={this.state.bannerheader}
                    home={this.state.home}
                    protfolio={this.state.protfolio}
                    currentpage={this.state.currentpage}
                />
                <Header />
                {/* <ServiceSectionTwo /> */}
                <br>
                </br>

                <div style={{ marginLeft: "4%", marginRight: "4%" }}>
                    <Tabs defaultActiveKey="" className="lineremoval" transition={false} id="noanim-tab-example" onClick={this.handleClick}>
                        <Tab eventKey="all" title="All Services" >
                            {/* <ServiceSectionThree data="all" /> */}
                        </Tab>
                        <Tab eventKey="design" title="Vacant">
                            {/* <ServiceSectionThree data="Vacant" /> */}
                        </Tab>
                        <Tab eventKey="interior" title="Occupied">
                            {/* <ServiceSectionThree data="Occupied" /> */}
                        </Tab>
                        <Tab eventKey="design1" title="Individuals">
                            {/* <ServiceSectionThree data="Individuals" /> */}
                        </Tab>
                        <Tab eventKey="design2" title="Brokers">
                            {/* <ServiceSectionThree data="Brokers" /> */}
                        </Tab>
                        <Tab eventKey="design3" title="Real Estate">
                            {/* <ServiceSectionThree data="Real Estate" /> */}
                        </Tab>

                    </Tabs>
                </div>
                <div>
                    <div className="" style={{ margin: "2%" }}>
                        <div className="row">
                            <div className="col-md-6">
                                <img src={this.props.location.data.data.image} style={{ height: "100%", width: "100%" }}></img>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <h1>WE KNOW HOW DIFFICULT GETTING STARTED CAN BE</h1><br></br>
                                    <p>Interactively procrastinate high-payoff content without backward-compatible data.</p><br></br>
                                    <h1>CREATING YOUR STYLE</h1><br></br>
                                    <p>Collaboratively administrate empowered markets via plug-and-play networks dynamically procrastinate B2C users.Uniquely matrix economically sound value through cooperative technology.</p><br></br>
                                    <h1>PLANNING YOUR SCHEME</h1><br></br>
                                    <p>Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p><br></br>
                                    <h1>LET US HELP</h1><br></br>
                                    <p>Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership rather than prospective experiences. Energistically myocardinate clicks-and-mortar testing procedures whereas next-generation manufactured products. Interactively actualize front-end processes.</p><br></br>
                                </div>
                                
                            </div>
                            <div>
                                    
                            </div>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>

        )
    }
}

export default withRouter(Details);




{/* <div className="imageSectionHomeStaging" style={{ marginTop: "2%" }}>
                                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                            <div className="row">

                                                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 imgPds p-4">

                                                                <div class="content">
                                                                    <a href="#" target="_blank">
                                                                        <div class="content-overlay"></div>
                                                                        <img class="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
                                                                        <div class="content-details fadeIn-top">
                                                                            <div class="btn-6">
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                            </div>
                                        </div>

                                    </div> */}