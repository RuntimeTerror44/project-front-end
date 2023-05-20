import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./profile";
import { propTypes } from "react-bootstrap/esm/Image";

const LoginButton =(props)=>{
const {loginWithRedirect,isAuthenticated}= useAuth0();
// const [savedData,setSaveddata]=useState({})


return (
    
!isAuthenticated &&(

<>


<button onClick={()=>loginWithRedirect()} >

SignIn

</button>


</>
)
)

}

export default LoginButton