import { useNavigate } from "react-router-dom";

function SuccessPage(){

const navigate = useNavigate();

return(

<div style={{textAlign:"center",marginTop:"100px"}}>

<h1>Registration Successful 🎉</h1>

<button
onClick={()=>navigate("/registrations")}
style={{padding:"10px 20px"}}
>

View My Registrations

</button>

</div>

)

}

export default SuccessPage;