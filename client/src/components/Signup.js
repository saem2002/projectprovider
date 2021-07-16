import React,{useState} from 'react'
import { useHistory} from 'react-router-dom';
import signuplogo from '../images/signup.jpeg'



const Signup = () => {
    const history=useHistory();
    const [user,setUser]=useState({
        name:"",email:"",phone:"",password:"",cpassword:""
    });
    let name,value
    const handleInputs=(e)=>{
        name =e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value});
    }
    const Postdata= async(e)=>{
        e.preventDefault();
        const {name, email ,phone ,password, cpassword}=user;
        const res =await fetch("/register",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            name, email ,phone ,password, cpassword

        })
    });
    const data= await res.json();
    if(data.status===422||!data){
        window.alert("invalid");
        
    }else{
        window.alert("registered successfully");
        history.push('/login');
    }
    }
    return (
        <>
       
        <section className="register-section">
    
        <form className="register-form" method="POST">
            <h1 id="register">Register Here</h1>
            <div className="mb-3">
                <input type="text" className="form-control" name="name" id="size" placeholder="Your Name"  autoComplete="off"
                value={user.name}
                onChange={handleInputs}
                required/ >
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" name="email" id="size" placeholder="name@example.com"   autoComplete="off"
                value={user.email}
                onChange={handleInputs}
                required/ >
            </div>
            <div className="mb-3">
                <input type="tel" className="form-control" name="phone" id="size" pattern="[0-9]{5}-[0-9]{5}" placeholder="Phone No."  autoComplete="off"
                value={user.phone}
                onChange={handleInputs}
                required/ >
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" name="password" id="size" placeholder="Password"  autoComplete="off"
                value={user.password}
                onChange={handleInputs}
                required/ >
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" name="cpassword" id="size" placeholder="Confirm Password"   autoComplete="off"
                value={user.cpassword}
                onChange={handleInputs}
                required/ >
            </div>
            <div className="mb-3">
                <input type="submit" id="submit-btn" name="submit-"  value='Register' onClick={Postdata}/>
            </div>
        </form>
        <img src={signuplogo} alt="something wrong"></img>
        </section>

        </>
    )
}

export default Signup
