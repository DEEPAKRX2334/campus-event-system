import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AiImage from "../../assets/Ai.jpg";
import AnnualImage from "../../assets/AnnualdayImage.jpg";
import CulturalImage from "../../assets/CulturalsImage.jpg";
import SeminarImage from "../../assets/SeminarImage.jpg";

function StudentDashboard(){

const navigate = useNavigate();

const [events,setEvents] = useState([]);
const [search,setSearch] = useState("");
const [active,setActive] = useState("All");


useEffect(()=>{

fetch("http://localhost:8080/api/events")
.then(res=>res.json())
.then(data=>setEvents(data))
.catch(err=>console.log(err));

},[]);


const getImage=(category)=>{

if(category==="Workshop") return AiImage;
if(category==="Sports") return AnnualImage;
if(category==="Cultural") return CulturalImage;
if(category==="Seminar") return SeminarImage;

return AiImage;

};


const filteredEvents = events.filter(event=>{

const title = event.title || "";
const category = event.category || "";

const matchSearch = title.toLowerCase().includes(search.toLowerCase());
const matchCategory = active==="All" || category===active;

return matchSearch && matchCategory;

});


return(

<div>

{/* Navbar */}

<div style={styles.navbar}>

<div style={styles.logo}>
🎓 CampusEvent
</div>

<div style={styles.navButtons}>
<button style={styles.activeBtn}>Browse Events</button>
<button style={styles.btn} onClick={()=>navigate("/my-registrations")}>
My Registrations
</button>
</div>

<div style={styles.user}>👤 Deepak</div>

</div>


{/* Title */}

<h1 style={styles.title}>All College Events</h1>


{/* Search */}

<input
style={styles.search}
placeholder="🔍 Search events..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>


{/* Filters */}

<div style={styles.filters}>

{["All","Workshop","Sports","Cultural","Seminar"].map(cat=>(
<button
key={cat}
onClick={()=>setActive(cat)}
style={active===cat?styles.filterActive:styles.filterBtn}
>
{cat}
</button>
))}

</div>


{/* Event Cards */}

<div style={styles.grid}>

{filteredEvents.map(event=>(

<div key={event.id} style={styles.card}>

<img
src={getImage(event.category)}
alt="event"
style={styles.image}
/>

<h3>{event.title}</h3>

<p style={styles.category}>{event.category}</p>

<p>📅 {event.date}</p>

<p>📍 {event.location}</p>

<button
style={styles.button}
onClick={()=>navigate(`/event/${event.id}`)}
>
View Details
</button>

</div>

))}

</div>

</div>

);

}


const styles={

navbar:{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"15px 40px",
background:"#4da3d9",
color:"white"
},

logo:{
fontSize:"22px",
fontWeight:"bold"
},

navButtons:{
display:"flex",
gap:"10px"
},

btn:{
padding:"8px 15px",
background:"rgba(255,255,255,0.3)",
border:"none",
borderRadius:"6px",
color:"white"
},

activeBtn:{
padding:"8px 15px",
background:"white",
border:"none",
borderRadius:"6px",
color:"#4da3d9",
fontWeight:"bold"
},

user:{
fontWeight:"bold"
},

title:{
textAlign:"center",
marginTop:"30px"
},

search:{
display:"block",
margin:"20px auto",
padding:"10px",
width:"400px",
borderRadius:"6px",
border:"1px solid #ccc"
},

filters:{
display:"flex",
justifyContent:"center",
gap:"10px"
},

filterBtn:{
padding:"8px 18px",
borderRadius:"20px",
border:"1px solid #ccc",
background:"#eee"
},

filterActive:{
padding:"8px 18px",
borderRadius:"20px",
border:"none",
background:"#4e73df",
color:"white"
},

grid:{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"20px",
padding:"40px"
},

card:{
background:"white",
padding:"15px",
borderRadius:"10px",
boxShadow:"0 5px 15px rgba(0,0,0,0.1)"
},

image:{
width:"100%",
height:"150px",
objectFit:"cover",
borderRadius:"8px"
},

category:{
color:"#4e73df",
fontWeight:"bold"
},

button:{
marginTop:"10px",
background:"#28a745",
color:"white",
border:"none",
padding:"8px 12px",
borderRadius:"6px",
cursor:"pointer"
}

};

export default StudentDashboard;