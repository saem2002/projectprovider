import React,{useEffect,useState}  from 'react'

const Contact = () => {
    
    const[userData,setUserData]= useState({});

    const  userContact = async()=>{
        try{
            const res = await fetch('/getdata',{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
            
            });
            const data = await res.json();
            setUserData(data);
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log(err);
         
        }
    }
    useEffect(() => {
        
            userContact();
            // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])
    return (
        <div>
            <h1>{ userData.name}</h1>
            <p>Welcome Hello  contact world</p>
        </div>
    )
}

export default Contact
