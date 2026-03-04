import { useContext, useState } from "react";
import { EventContext } from "../../context/EventContext";

function AdminDashboard() {

  const { events, registrations, addEvent } = useContext(EventContext);

  const [form, setForm] = useState({
    title: "",
    category: "",
    date: "",
    location: "",
    image: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();

    addEvent(form);

    setForm({
      title: "",
      category: "",
      date: "",
      location: "",
      image: ""
    });

    alert("Event Added Successfully");
  };

  return (
    <div style={styles.container}>

      <h1>Admin Dashboard</h1>

      {/* ADD EVENT FORM */}

      <h2>Add New Event</h2>

      <form style={styles.form} onSubmit={handleAddEvent}>

        <input
          name="title"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <button type="submit">Add Event</button>

      </form>

      {/* EVENT LIST */}

      <h2 style={{marginTop:"40px"}}>All Events</h2>

      {events.map(event => (

        <div key={event.id} style={styles.eventCard}>

          <h3>{event.title}</h3>

          <p>Category: {event.category}</p>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>

        </div>

      ))}

      {/* REGISTERED STUDENTS */}

      <h2 style={{marginTop:"40px"}}>Registered Students</h2>

      {registrations.length === 0 && (
        <p>No registrations yet</p>
      )}

      {registrations.map((r,i)=>(
        
        <div key={i} style={styles.studentCard}>

          <h3>{r.event.title}</h3>

          <p>Category: {r.event.category}</p>
          <p>Date: {r.event.date}</p>
          <p>Location: {r.event.location}</p>

          <hr/>

          <p>Name: {r.student.name}</p>
          <p>College: {r.student.college}</p>
          <p>Email: {r.student.email}</p>
          <p>Phone: {r.student.phone}</p>

          <p>Student ID: {r.studentId}</p>
          <p>Payment ID: {r.paymentId}</p>
          <p>Amount: ₹{r.amount}</p>

        </div>

      ))}

    </div>
  );
}

const styles = {

container:{
padding:"40px"
},

form:{
display:"flex",
flexDirection:"column",
gap:"10px",
maxWidth:"400px"
},

eventCard:{
background:"#e9f1ff",
padding:"15px",
marginBottom:"15px",
borderRadius:"8px"
},

studentCard:{
background:"#eee",
padding:"20px",
marginBottom:"20px",
borderRadius:"8px"
}

};

export default AdminDashboard;