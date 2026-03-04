import { useEffect, useState } from "react";
import { getRegistrations } from "../../api/eventApi";

function MyRegistrations() {

  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {

    loadRegistrations();

  }, []);

  const loadRegistrations = async () => {

    try {

      const data = await getRegistrations();
      setRegistrations(data);

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div style={{padding:"40px"}}>

      <h1>My Registrations</h1>

      {registrations.length === 0 ? (

        <p>No registrations found.</p>

      ) : (

        registrations.map((r) => (

          <div
            key={r.id}
            style={{
              background:"#f2f2f2",
              padding:"20px",
              marginTop:"20px",
              borderRadius:"8px"
            }}
          >

            <h2>{r.eventName || "Event"}</h2>

            <p><b>Name:</b> {r.studentName}</p>
            <p><b>Email:</b> {r.email}</p>
            <p><b>Phone:</b> {r.phone}</p>

            <p><b>Department:</b> {r.department}</p>
            <p><b>Year:</b> {r.year}</p>

            <p><b>College:</b> {r.college}</p>

            <p><b>Payment:</b> {r.paymentType}</p>
            <p><b>Order ID:</b> {r.orderId}</p>

            <p><b>Date:</b> {r.date}</p>

          </div>

        ))

      )}

    </div>

  );
}

export default MyRegistrations;