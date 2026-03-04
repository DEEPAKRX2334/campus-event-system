import { createContext, useState } from "react";

import AiImage from "../assets/Ai.jpg";
import SportsImage from "../assets/AnnualdayImage.jpg";
import CulturalImage from "../assets/CulturalsImage.jpg";
import SeminarImage from "../assets/SeminarImage.jpg";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {

const [events] = useState([
{
id:1,
title:"AI Workshop",
category:"Workshop",
date:"2026-03-15",
location:"Lab 1",
image:AiImage
},
{
id:2,
title:"Sports Day",
category:"Sports",
date:"2026-03-20",
location:"Ground",
image:SportsImage
},
{
id:3,
title:"Cultural Fest",
category:"Cultural",
date:"2026-03-22",
location:"Main Hall",
image:CulturalImage
},
{
id:4,
title:"Tech Seminar",
category:"Seminar",
date:"2026-03-25",
location:"Auditorium",
image:SeminarImage
}
]);

const [registrations,setRegistrations] = useState([]);

const registerEvent = (event,student) => {

const paymentId = "PAY" + Math.floor(Math.random()*100000);
const studentId = "STU" + Math.floor(Math.random()*10000);

const newRegistration = {
paymentId,
studentId,
event,
student,
amount:100
};

setRegistrations([...registrations,newRegistration]);

};

return(

<EventContext.Provider value={{
events,
registrations,
registerEvent
}}>
{children}
</EventContext.Provider>

);

};