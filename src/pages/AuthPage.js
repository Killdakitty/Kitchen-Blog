import {useState} from "react"
import SingUpForm from "../components/SingUpForm/SingUpForm";
import LoginForm from "../components/LoginForm/LoginForm";

function AuthPage({ setUser }) {
    const [showLogin, setShowLogin]= useState(true)
  return (
    <div>
      <h1> Auth Page</h1>
    <button onClick={()=>setShowLogin(!showLogin)}>{showLogin ? "SignUp" : "Login"}</button>
    {
        showLogin ? (

            <LoginForm setUser={setUser}/>
  ):(


      <SingUpForm setUser={setUser} />

  )

  } 

    </div>
  )
 ;
}

export default AuthPage;
