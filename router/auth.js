const jwt = require('jsonwebtoken');
const express = require('express');
const router =express.Router();
const bcrypt = require("bcrypt");
const authenticate = require('../db/middleware/authenticate')

require('../db/conn');
const User = require("../model/userSchema");
const ProjectUser = require("../model/ProjectSchema");



router.get('/',(req,res)=>{
    res.send(`Hello World from the server router`)
});

router.post('/register',async(req,res)=>{
    const {name,email,phone,work,password,cpassword} = req.body;
    if(!name || !email || !phone ||  !password || !cpassword){
        return res.status(422).json({error:"please fill this field correctly"});
    }
    try{
    const userExist=await User.findOne({email:email});
    if(userExist){
       return  res.status(422).json({error:"email already exist"});
    }else if(password != cpassword){
       return  res.status(422).json({error:"passwords are not matching"});
    }else{
        const user = new User({name,email,phone,work,password,cpassword});

        await user.save();
        res.status(201).json({message:"user registered successfully"});
    
    }
   
     } catch(err){
            console.log(err);
        }
    
    });
    // login route
    router.post('/signin',async(req,res)=>{
        
        try{
            const{email,password}=req.body;
            if(!email || !password){
                return res.status(400).json({error:"plz fill the data"})
            }
            const userLogin = await User.findOne({ email:email });
            if(userLogin){
                const isMatch = await bcrypt.compare(password, userLogin.password);

                const token = await userLogin.generateAuthToken();
                res.cookie("jwtoken",token,{
                    expires:new Date(Date.now + 2589200000),
                    httpOnly:true
                });
            if(!isMatch){
                res.status(400).json({error:"user error"});
            }else{
                res.json({message:"user signin successfully"});
            }
            }else{
                res.status(400).json({message:"invalid credentials"});
            }
        }catch(err){
            console.log(err);

        }

    })
    router.get('/about',authenticate ,(req,res)=>{
        res.send(req.rootUser);
    });
    router.get('/getdata',authenticate,(req,res)=>{
        res.send(req.rootUser);
    });
    router.post('/Project',async(req,res)=>{
        const {ProjectName,Price} = req.body;
        const projectpage = new ProjectUser({ProjectName,Price});

        await projectpage.save();
        res.status(201).json({message:"project added successfully"});
    });
    router.get('/Project',authenticate,(req,res)=>{
        console.log("dones");
    });
 
 

    module.exports = router;