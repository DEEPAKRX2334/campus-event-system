import { useLocation, useNavigate } from "react-router-dom";

function InvoicePage(){

const location = useLocation();
const navigate = useNavigate();

const data = location.state;

if(!data){
return <h2 style={{textAlign:"center"}}>No Invoice Found</h2>;
}

return(

<div style={styles.container}>

<div style={styles.card}>

<h2>Payment Successful 🎉</h2>

<p><b>Order ID:</b> {data.orderId}</p>
<p><b>Student Name:</b> {data.studentName}</p>
<p><b>Email:</b> {data.email}</p>
<p><b>Phone:</b> {data.phone}</p>
<p><b>Department:</b> {data.department}</p>
<p><b>College:</b> {data.college}</p>
<p><b>Payment Type:</b> {data.paymentType}</p>

<button
onClick={()=>navigate("/student")}
style={styles.button}
>
Back to Dashboard
</button>

</div>

</div>

);

}

const styles={

container:{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh",
background:"#f4f6f9"
},

card:{
background:"white",
padding:"30px",
borderRadius:"10px",
boxShadow:"0 5px 15px rgba(0,0,0,0.1)",
width:"350px",
textAlign:"center"
},

button:{
marginTop:"20px",
padding:"10px",
width:"100%",
background:"#4e73df",
color:"white",
border:"none",
borderRadius:"6px",
cursor:"pointer"
}

};

export default InvoicePage;