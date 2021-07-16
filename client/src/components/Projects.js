import React,{useState, useEffect } from 'react'

import addlogo from '../images/addlogo.png'


const Projects = () => {
 
    // const[userData,setUserData]= useState({});
        const [user,setUser]=useState({
            ProjectName:"",Price:""
        });
        let name,value
        const handleInputs=(e)=>{
            name =e.target.name;
            value = e.target.value;
            setUser({...user,[name]:value});
        }
        const Postdata= async(e)=>{
            e.preventDefault();
            const {ProjectName,Price}=user;
            const res =await fetch("/Project",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                ProjectName,Price
    
            })
        });
        const data= await res.json();
        if(data.status===422||!data){
            window.alert("invalid");
            
        }else{
            window.alert("project added successfully");
        }
        }
    // const displayb='block'
    // const displayn='none'
    // const [bg , setstate]=useState(displayn)
    // const click=()=>{
    //     setstate(displayb)
    // }

    const[userData,setUserData]= useState({});

    const callAboutPage = async()=>{
        try{
            const res = await fetch('/Project',{
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
            
        }
    }
    useEffect(() => {
        
            callAboutPage();
            // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])
   


    return (
        <>
        <div>
              <section className="main-section">
            <div className="first-div">
                <h1>Add Your Own Project</h1>
                <img  src={addlogo} alt="error" id="addlogo" ></img>
           </div>
            
          
        </section>
             <div id="project-details" > 
        <form  method="POST" >
             Project Title:<br/>
             <input type="text" className="projects" name="ProjectName"
              value={user.ProjectName}
              onChange={handleInputs}
             /><br/>
             Price:<br/>
             <input type="text" className="projects" name="Price"
              value={user.Price}
              onChange={handleInputs}
            
             /><br/>
             <label htmlFor="level">Choose level of project:</label><br/>
             <select id="level">
                 <option value="Easy">Easy</option>
                 <option value="Medium">Medium</option>
                 <option value="Hard">Hard</option>
             </select><br/><br/>    
             <input type="submit" value="Add"  onClick={Postdata} />
            </form>
            </div>
        </div>
        
            <form method="GET">
            <div id="projectdata">
                <h5>{userData.ProjectName}</h5>
                {/* <h5>{userData.Price}</h5> */}
            </div>
            </form>
        
        </>
    )
}

export default Projects
