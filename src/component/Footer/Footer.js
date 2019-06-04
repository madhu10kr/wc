import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
state={
listItem:[
{id:'1',liname:'Home',link:'/home'},
{id:'2',liname:'About Us',link:'/about_us'},
{id:'3',liname:'Services',link:'/services'},
{id:'4',liname:'Photo Gallery',link:'/photo_gallery'},
{id:'5',liname:'Contact Us',link:'/contact_us'}
],
listItemtwo:[
{id:'1',smname:'Facebook',link:'/facebook'},
{id:'2',smname:'Twitter',link:'twitter'},
{id:'3',smname:'Google Plus',link:'google_plus'},
{id:'4',smname:'Instagram',link:'instagram'},
{id:'5',smname:'Linkedin',link:'linkedin'}
]
}
render() {
return (
<div className="bg-c">
<div className="container p-4 cont-tf">
<div className="row">
<div className="col-md-6 col-sm-12 font-weight-bold">Let's discuss what's next</div>
<div className="col-md-6 col-sm-12">
<button className="btn float-right text-light">
GET IN TOUCH &#10162;
</button>
</div>
</div> 
</div>
<hr className="bg-light"/>
<div className="container">
<div className="row">
<div className="col-md-6 col-sm-12 p-4">
<h5 className="text-light">Painting Service Center</h5>
<span className="font-wsc">11th main Rd</span><br/>
<span className="font-wsc">4th T block, Jaynagar</span><br/>
<span className="font-wsc">Bengaluru, 560011</span><br/>
<div className="mt-3">
<span className="font-wsc"><i className="fa fa-phone pr-3" aria-hidden="true"></i>(03) 123456789</span><br/>
<span className="font-wsc"><i className="fa fa-mobile-alt pr-3" aria-hidden="true"></i>+91 9876543210</span><br/>
<span className="font-wsc"><i className="fa fa-envelope pr-3" aria-hidden="true"></i>warren@wcconstructions.com</span>
</div>
</div>
<div className="col-md-6 col-sm-12 p-4">
<div className="row">
<div className="col-lg-4 col-md-6 col-sm-6 ml-auto">
<h5>Navigation</h5>
{this.state.listItem.map(liitem =>{
return( 
<li className="font-wsc">{liitem.liname}</li>
)})}
</div>
<div className="col-lg-4 col-md-6 col-sm-6">
<h5>Social Media</h5>
{this.state.listItemtwo.map(scitem =>{
return( 
<li className="font-wsc">{scitem.smname}</li>
)})}
</div>
</div>
</div>
</div>
</div>
<hr className="bg-light"/>
<div className="container p-4 mqm-c">
<div className="row">
<div className="font-wsc col-md-6 col-sm-12">© 2019 carson construction & contracting.</div>
<div className="col-md-6 col-sm-12">
<a className="p-4 font-wsc">Terms & Conditions</a>
<a className="p-4 font-wsc">Privacy</a>
</div>
</div> 
</div>
</div>
)
}
}