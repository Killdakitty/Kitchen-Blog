import{useState} from 'react';
import { signUp } from '../../utilities/users-service';

function SingUpForm({setUser}){
    const[formData, setFormData]= useState({
        name:"",
        email:"",
        password:"",
        confirm:"",
        error:""
    })

    const disabled= formData.password!==formData.confirm;
    const handleChange=(e)=>{
setFormData({
    ...formData,
    [e.target.name]: e.target.value,
    error: ''

})
    };
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try{
            console.log(formData);
            //copy the for data
            const userFormData={...formData}
            
            //delete non-nessary info 
            delete userFormData.confirm
            delete userFormData.error

            //calling user service signUp function
           const user= await signUp
           (userFormData);
            console.log("USER", user);
            setUser(user)

        }catch(error){
            console.log(error);
            setFormData({
                ...formData,
                 error:'Sign Up Failed-Try Again'
            })
        }
    };


    return(
    <div>
       <div className="form-container">
       <form autoComplete='off' onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required/>

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required/>

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required/>

        <label>Confirm Password</label>
        <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required/>

        <button type="submit" disabled={disabled}>Sign Up</button>
        </form>
       </div>
       <p className="error-message">{formData.error}</p>
    </div>)
}

export default SingUpForm