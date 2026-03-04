import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import StudentDashboard from "./pages/student/StudentDashboard";
import EventDetails from "./pages/student/EventDetails";
import PaymentPage from "./pages/student/PaymentPage";
import SuccessPage from "./pages/student/SuccessPage";
import MyRegistrations from "./pages/student/MyRegistrations";
import InvoicePage from "./pages/student/InvoicePage";

import AdminDashboard from "./pages/admin/AdminDashboard";

import { EventProvider } from "./context/EventContext";

function App(){

return(

<EventProvider>

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>

<Route path="/student" element={<StudentDashboard/>}/>
<Route path="/event/:id" element={<EventDetails/>}/>
<Route path="/payment/:id" element={<PaymentPage/>}/>
<Route path="/success" element={<SuccessPage/>}/>
<Route path="/registrations" element={<MyRegistrations/>}/>
<Route path="/invoice/:id" element={<InvoicePage/>}/>

<Route path="/admin" element={<AdminDashboard/>}/>

</Routes>

</BrowserRouter>

</EventProvider>

)

}

export default App;