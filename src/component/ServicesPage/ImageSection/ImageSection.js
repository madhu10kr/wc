import React from 'react'
import './ImageSection.css'
import {Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class ImageSection extends React.Component{
state={
firstslideimages:[
{
id:1,
para:'Vacant',
header:'Bloomfield St.',
viewmore:'VIEW MORE',
image:'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
},
{
id:2,
para:'Occupied',
header:'Bloomfield St.',
viewmore:'VIEW MORE',
image:'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
},
{
id:3,
para:'Occupied',
header:'Bloomfield St.',
viewmore:'VIEW MORE',
image:'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
},
{
id:4,
para:'Individuals',
header:'Bloomfield St.',
viewmore:'VIEW MORE',
image:'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
},
{
id:5,
para:'Individuals',
header:'Bloomfield St.',
viewmore:'VIEW MORE',
image:'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
},
{
id:6,
para:'Vacant',
header:'Bloomfield St.',
viewmore:'VIEW MORE',
image:'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
},
{
id:7,
para:'Brokers',
header:'Bloomfield St.',
viewmore:'VIEW MORE',
image:'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
},
{
id:8,
para:'Real Estate',
header:'Bloomfield St.',
viewmore:'VIEW MORE',
image:'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
},
],
final:[]
}
componentDidMount = async () => {
if(this.props.data == "all"){
await this.setState({
final:this.state.firstslideimages
});
return this.state.final
}else {
let n1 = this.state.firstslideimages.filter(val => {
return val.para == this.props.data
});
this.setState({
final:n1
})
}
}
render(){
return (
<div className="imageSectionHomeStaging" style={{marginTop:"2%"}}>



<div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
<div className="row">

{
this.state.final.map((data)=>{
return(
<div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 imgPds p-4">

<div class="content">
<a href="#" target="_blank">
<div class="content-overlay"></div>
<img class="content-image" src={data.image}/>
<div class="content-details fadeIn-top">
<div class="btn-6">
<p>{data.para}</p>
<h3>{data.header}</h3>
<a href="#">
<Link to={{pathname:'details',data:{data}}}><span>{data.viewmore}</span></Link>
</a>
</div>
</div>
</a>
</div>

</div>
)
})
}

</div>
</div>

</div>
)
}
}
export default ImageSection