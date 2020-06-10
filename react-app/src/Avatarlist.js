import React from 'react';


const Avatarlist = (props) => {
return(

<div className="avatarstyle bg-warning m-4 p-4 d-inline-block shadow">

<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"
className="ml-3"/>
<h4 className="text-center">{props.name}</h4>
<p className="text-center">{props.work}</p>
</div>
)
}

export default Avatarlist;