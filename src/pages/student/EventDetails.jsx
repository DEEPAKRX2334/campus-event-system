import { useParams,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../../context/EventContext";

function EventDetails(){

const {id} = useParams();
const {events} = useContext(EventContext);
const navigate = useNavigate();

const event = events.find(e=>e.id===Number(id));

return(

<div style={{textAlign:"center",padding:"50px"}}>

<img src={event.image} style={{width:"400px"}} alt=""/>

<h1>{event.title}</h1>

<p>Category: {event.category}</p>
<p>Date: {event.date}</p>
<p>Location: {event.location}</p>

<button
onClick={()=>navigate(`/payment/${event.id}`)}
style={{padding:"10px 20px",background:"green",color:"white"}}
>

Register Event

</button>

</div>

)

}

export default EventDetails;