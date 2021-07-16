import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'

const About = () => {
    const history=useHistory();
    const[userData,setUserData]= useState({});

    const callAboutPage = async()=>{
        try{
            const res = await fetch('/about',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            const data = await res.json();
            setUserData(data);
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log(err);
            history.push('/login');
        }
    }
    useEffect(() => {
        
            callAboutPage();
            // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])
    return (
        <form method="GET">
        <div>
            <h5>{userData.name}</h5>
            <h5>{userData.email}</h5>
            <h5>{userData.name}</h5>
            <h5>{userData.name}</h5>
            <p>Welcome Hello  world about</p>
        </div>
        </form>
    )
}

export default About
