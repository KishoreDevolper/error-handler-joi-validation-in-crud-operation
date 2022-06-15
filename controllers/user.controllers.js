const User = require('../db/models/user.model');

const Joi = require('joi');

const schema = Joi.object({
    Name:Joi.string().required().min(3),
    Designation:Joi.string().required().min(2),
    DateOfBirth:Joi.string().required(),
    Phonenumber:Joi.number().required().min(10),
    Email:Joi.string().min(10).required().email()

})

exports.create = async(req,res)=>{
    try{
        const UserData = ({
            Name:req.body.Name,
            Designation:req.body.Designation,
            DateOfBirth:req.body.DateOfBirth,
            Phonenumber:req.body.Phonenumber,
            Email:req.body.Email
        })
        const {error} = schema.validate(UserData)
        if(error){
          return res.status(403).json({message:"Please Check the Given Details And Try Again",error})
        }
        else{
          let result = await User.query().insert(UserData);
            res.status(201).json({message:"Data Saved Sucessfully",data:result})
        }

    } catch (err) {
        return res.status(500).json({message:"SomeThing Went Wrong Please Try Again",error:err})
        
    }
}

exports.update = async(req,res)=>{
    try{
        const UserData = ({
            Name:req.body.Name,
            Designation:req.body.Designation,
            DateOfBirth:req.body.DateOfBirth,
            Phonenumber:req.body.Phonenumber,
            Email:req.body.Email
        })
  
         const {error} = schema.validate(UserData);
         if(error){
            return res.status(403).json({message:"Please Check the Given Details And Try Again",error})
         }
         else{
            const {id}= req.params
            let result = await User.query().patch(UserData).where("id",id)
            if(result){
           
                res.status(200).json({message:"Data Updated Sucesssfully",data:result})
            }
            else{
                res.status(404).json({message:"user not found please check and try again!!.."})
            }
        
         }
        
    } catch (err) {
        return res.status(500).json({message:"SomeThing Went Wrong Please Try Again",error:err})
    }
}

exports.findsingle = async(req,res)=>{
    try {
        const {id} = req.params;
        
        const result = await User.query().findById(id)
      if(result){
           
            res.status(200).json({message:"Here is Your requested Data",data:result})
        }
        else{
            res.status(404).json({message:"user not found please check and try again!!.."})
        }
    } catch (error) {
        return res.status(500).json({message:"SomeThing Went Wrong Please Try Again",error:err});
    }
}

exports.findall = async(req,res)=>{
    try {
        
        let result = await User.query();
        
        res.status(200).json({message:"All the Data in the DataBase",data:result})
    
    } catch (err) {
      
        return res.status(500).json({message:"Something Went Wrong Please Try Again", error:err})
        
    }
}

exports.delete = async(req,res)=>{
    try {
        const {id}= req.params;
        let result = await User.query().deleteById(id);
        if(result){
            res.status(200).json({message:"Data Deleted Sucessfully!!.."})
        }
        else{
            res.status(404).json({message:"user not found please check and try again!!.."})           
        }
    } catch (error) {
        return res.status(500).json({message:"Something Went Wrong Please Try Again", error:err})
        
    }
}