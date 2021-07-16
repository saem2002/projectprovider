
const mongoose = require("mongoose");


const ProjectSchema = new mongoose.Schema({
   
    ProjectName:{
        type:String,
        
    },
    Price:{
        type:String,
       
    },
 
});
const ProjectUser = mongoose.model('PROJECTUSER',ProjectSchema);


module.exports = ProjectUser;


