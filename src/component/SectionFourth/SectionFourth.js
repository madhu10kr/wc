import React, { Component } from 'react';
import './SectionFourth.css'
export default class SectionFourth extends Component {
render()
{
return(
<div>
<div className="container custom projectsec">
<div className="row">
<div className="col-md-4 col-sm-12 view">
<h3>Nvest have completed over 300 projects globally</h3>
</div>
<div className="col-md-2 col-sm-6 view">
<h1 style={{fontWeight:"600"}}>200</h1>
<p>Year Experience</p>
</div>
<div className="col-md-2 col-sm-6 view">
<h1 style={{fontWeight:"600"}}>345</h1>
<p>Property Built</p>
</div>
<div className="col-md-2 col-sm-6 view">
<h1 style={{fontWeight:"600"}}>23</h1>
<p>Team Member</p>
</div>
<div className="col-md-2 col-sm-6 view">
<h1 style={{fontWeight:"600"}}>16</h1>
<p>Award Gain</p>
</div>
</div>
</div>
</div>
)
}
}