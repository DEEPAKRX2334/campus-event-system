import { useState } from "react";
import { createRegistration } from "../../api/eventApi";
import { useNavigate } from "react-router-dom";

function PaymentPage() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    studentName:"",
    college:"",
    email:"",
    phone:"",
    department:"",
    year:"",
    paymentType:"Online",
    eventId:1
  });

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = async ()=>{

    try{

      const data = {
        ...form,
        orderId:"ORD-"+Math.random().toString(36).substring(2,8)
      };

      await createRegistration(data);

      alert("Registration Successful");

      navigate("/registrations");

    }catch(e){

      alert("Registration failed");
      console.error(e);

    }

  };

  return(

    <div style={{textAlign:"center",marginTop:"40px"}}>

      <h1>Event Registration</h1>

      <input name="studentName" placeholder="Name" onChange={handleChange}/><br/><br/>
      <input name="college" placeholder="College" onChange={handleChange}/><br/><br/>
      <input name="email" placeholder="Email" onChange={handleChange}/><br/><br/>
      <input name="phone" placeholder="Phone" onChange={handleChange}/><br/><br/>
      <input name="department" placeholder="Department" onChange={handleChange}/><br/><br/>
      <input name="year" placeholder="Year" onChange={handleChange}/><br/><br/>

      <select name="paymentType" onChange={handleChange}>
        <option value="Online">Online</option>
        <option value="Offline">Offline</option>
      </select>

      <br/><br/>

      <button
        onClick={handleSubmit}
        style={{
          background:"green",
          color:"white",
          padding:"12px 40px",
          fontSize:"18px"
        }}
      >
        Pay ₹100
      </button>

    </div>

  );
}

export default PaymentPage;