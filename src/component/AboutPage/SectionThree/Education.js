import React, { Component } from 'react';
import './Education.css'

export default class Education extends Component {
    state={
        data:[{title:'Education',degree:'CERTIFICATE OF MARKETING & ADVERTISING',college:'University of California, Extension',year:'2010 – 2013',address:'Los Angeles, CA'},
              {degree:'B.F.A. IN GRAPHIC DESIGN',college:'Woodbury University, School of Media, Culture & Design',year:'2004 – 2006',address:'Burbank, CA, CA'},
              {degree:'ADVERTISING ART DIRECTION',college:'Columbia College Chicago',year:'2001 – 2003',address:'Chicago, IL'},
              {title:'Work Experiece',work:'CERTIFICATE OF MARKETING & ADVERTISING',company:'Bemis Balkind',description:'Anthony creates design concepts, implements marketing strategies and develops digital campaigns.',year:'2013-2014',address:'Beverly Hills, CA'},
              {work:'CREATIVE DIRECTOR',company:'Starmen Design Group, Inc.',description:'Anthony creates design concepts, implements marketing strategies and develops digital campaigns.',year:'2007 – 2010',address:'Hollywood, CA'},
            ]
    }
    render() {
        return (
		<div className="container-fluid ">
            <div className="mob-edu-pad" style={{ backgroundColor: "#38A4B4",paddingTop:"100px" }}>
                <div className="">
                  {this.state.data.map(item => {
                      return(
                        <div className="row m-0">
                        <div className="col-md-4 col-sm-12 col-xs-12 pb-5 pt-2 mob-edu" data-aos="fade-right">
                            <h1 style={{color:"white"}}>{item.title}</h1>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-6 pt-2 pb-5 mob-edu" data-aos="zoom-in-up">
                            <h5 style={{color:"white"}}>{item.degree}</h5>
                            <h6  style={{color:"#E3F2F4"}}>{item.college}</h6>
                            <h5  style={{color:"white"}}>{item.work}</h5>
                            <h6  style={{color:"#E3F2F4"}}>{item.company}</h6>
                            <h6  style={{color:"#E3F2F4"}}>{item.description}</h6>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-6 pb-5 pt-2 mob-edu" data-aos="zoom-in-up">
                            <h6 style={{color:"#E3F2F4"}}>{item.year}</h6>
                            <h6 style={{color:"#E3F2F4"}}>{item.address}</h6>
                        </div>

                    </div>

                      )
                  })}
                </div>

            </div>
			</div>
        )
    }
}
