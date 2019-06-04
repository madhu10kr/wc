import React from 'react';
import './Banner.css'
import { Breadcrumb } from 'react-bootstrap'
import { directiveLiteral, directive } from '@babel/types';

const Banner = ({bannerheader, home, protfolio, currentpage}) => {
    return (
        <div className="bannerSectionWrapper">
            <div className="bannerHeaderWrapper">
                <h1>{bannerheader}</h1>
                <div>   
                    <Breadcrumb className="breadcrumbWrapper">
                        <Breadcrumb.Item href="#">{home}</Breadcrumb.Item>
                            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                               {protfolio} 
                            </Breadcrumb.Item>
                            <li className="curentLoactionSec">/ {currentpage}</li>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    )
}

export default Banner
