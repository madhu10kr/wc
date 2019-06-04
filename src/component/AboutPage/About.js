import React, { Component } from 'react';
import Header from '../Navbar'
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/Firstsec'
import SectionThree from './SectionThree/Education'
import SectionThreea from './SectionThreea/EducationImage'
import SectionFour from './SectionFour/SectionFour'
import Footer from '../SectionSeventh/SectionSeventh'

export default class Home extends Component {
render()
{
return(
<div>
<Header/>
<SectionOne/>
<SectionTwo/>
<SectionThree/>
<SectionThreea/>
<SectionFour/>
<Footer/>

</div>
)
}
}