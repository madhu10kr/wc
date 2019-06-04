import React, { Component } from 'react'
import './Firstsec.css'
import Image from '../../../images/background1.jpg'
export default class Firstsec extends Component {
    render() {
        return (
<div className="parent1">
            <div className="container-fluid a">
			<div className="imagess">
                <img src={Image} className="img-fluid"/>
				</div>
                    
<div className="container">
                    <div className="row ab">
                     
                            <div className="col-md-6 col-sm-12" data-aos="fade-right">
                                <p className="text1" >HI! GOOD TO SEE YOU</p>
                                <p className="text2">I have exquisite taste and boundless curiosity to create a masterpiece</p>
                            </div>

                            <div className="col-md-6 col-sm-12" data-aos="fade-left">
                                <p className="text3">Harold studied at the Milan School of Interior Design and gained his experience working at five top design firms in Milan.  He have designed, renovated and redesigned high end residential projects throughout the city and was fortunate to work
                                  on Megapolitan Home’s House, a $90 million, 17,800 square foot Greek Revival townhouse</p>

                            </div>
                        </div>
                    </div>

                </div>
                </div>
           
        )
    }
}
