import React, { Component } from 'react';
import Avatarlist from './Avatarlist';
import './Avatar.css';


class Avatar extends Component {
constructor() {
super();
this.state = {
name: "Welcome to Avatar World!"
}
}
namechange() {
this.setState({
name:"Welcome to humans World!"
})
}
render() {
const avatarlistarray = [

{
id: 1,
name: "januka",
work: "web developer"
},
{
id: 2,
name: "Soumya",
work: "Business Analyst"
},
{
id: 3,
name: "Sweta",
work: "Market Analyst"
},
{
id: 4,
name: "Seema",
work: "Ads Operation"
}
]
const avatarnewarray = avatarlistarray.map((avatarcard , i)=>{
return <Avatarlist key={i} id={avatarlistarray[i].id}
name={avatarlistarray[i].name}
work={avatarlistarray[i].work}/>
})
return (
<div className="mainpage">
<h1 className="text-center ">{this.state.name}</h1>
{avatarnewarray}
<button className="m-auto d-block btn btn-outline-success btn-lg"
onClick={() => this.namechange()}> Change Header</button>
</div>
)

}
}



export default Avatar;