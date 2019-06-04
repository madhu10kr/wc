import React, { Component } from 'react';
import Navbar from '../component/Navbar'
import SectionThird from '../component/SectionThird/SectionThird'
//import SectionFirst from '../component/SectionFirst/SectionFirst'
import SectionSecond from '../component/SectionSecond/SectionSecond'
import HomeStageSectionThree from '../component/HomeStageSectionThree/HomeStageSectionThree'
import SectionFifth from '../component/SectionFifth/SectionFifth'
import SectionFourth from '../component/SectionFourth/SectionFourth'
import HomeStageSectionSix from '../component/HomeStageSectionSix/HomeStageSectionSix'
import SectionSeventh from '../component/SectionSeventh/SectionSeventh'
//import Footer from '../component/Footer/Footer'
import AboutPageSectionOne from '../component/AboutPage/SectionOne/SectionOne'
import AboutPageSectionFour from '../component/AboutPage/SectionFour/SectionFour'
export default class Home extends Component {
render()
{
return(
<div>

<Navbar/>
<SectionThird/>

<SectionSecond/>
<HomeStageSectionThree/>
<SectionFourth/>
<SectionFifth/>
<HomeStageSectionSix/>
<SectionSeventh/>

</div>
)
}
}