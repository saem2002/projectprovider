import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import userlogo from '../images/name.png'


const Login = () => {
    const history=useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');

    const loginUser= async (e)=>{
        e.preventDefault();

        const res =await fetch("/signin",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                email,password

            })
        }); 
        const data = res.json();
        if(data.status===400||!data){
            window.alert("invalid");
            console.log("s");
        }else{
            window.alert("Login successfully");
            console.log("f");
            history.push('/');
        }
    }
    return (
        <section className="login-section">
    
        <form className="login-form" method="POST">
            <img src={userlogo} alt="saem" id="userlogo"></img>
            <h1 id="register">Login</h1>
            <div className="mb-3">
                <input type="email" className="form-control" name="name" id="size"   autoComplete="off"  required 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email"
               / >
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" name="email" id="size"  autoComplete="off" required 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password" 
                / >
            </div>
            
            <div className="mb-3">
                <input type="submit" id="submit-btn" name="submit-"  value='Login' onClick={loginUser}/>
            </div>
        </form>
        
        </section>
    )
}

export default Login
