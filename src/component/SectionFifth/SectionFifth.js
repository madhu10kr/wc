import React, { Component } from 'react';
import './SectionFifth.css'
import Background from '../../images/background.jpg'
export default class SectionFifth extends Component {
	state={
		realestate:[
		{id:1,title:"The Cliff Hanger",desc:"Bed:3 Bath:4",image:Background,button:"See More"},
		{id:2,title:"Spicks and Specks",desc:"Bed:3 Bath:4",image:Background,button:"See More"},
		{id:3,title:"The Cliff Hanger",desc:"Bed:3 Bath:4",image:Background,button:"See More"},
		]
	}
render()
{
return(
<div>
<div className="container">
  <div className="row">
  {this.state.realestate.map(rs=>{
	  return (
	  <div className="col-sm custom">
     <div className="card" >
  <img src={rs.image} className="card-img-top" />
  <div classNameName="seemore ">
  <h5 className="buttonsection p-2">{rs.button}</h5>
  </div>
  <div className="card-body">
    <h5 className="card-title customtitle">{rs.title}</h5>
  <p className="card-text customdesc">{rs.desc}</p>
  </div>
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