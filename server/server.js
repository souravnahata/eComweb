const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const cors = require('cors');
const userModel = require('./userDetails');

app.use(cors());


const mongoUrl = "mongodb+srv://karan:karan12345@cluster0.n2w7jhe.mongodb.net/?retryWrites=true&w=majority"

mongoose
    .connect(mongoUrl,{
        useNewUrlParser : true,
    })
    .then(()=>{
        console.log("db connected");
    })
    .catch((e)=>console.log(e));

require('./userDetails')

const User  = mongoose.model("userModel");

app.post('/register',async(req,res)=>{
    const { fname,email,password,cpassword } = req.body;
    try{

        const oldUser = await User.findOne({email});

        if(oldUser){
            return res.json({error: "User exists"});
        }
    
        await User.create({
            fname,
            email,
            password,
            cpassword,
        });

        res.send({status:"ok"});
    }catch(err){
        res.send({status:"error"});
    }
})

app.get('/login2',async(req,res)=>{
    try{


        res.json({
            message:"working"
        })
    // const data = req.body;

    // let user = await userModel.findOne({email:data.email});

    // if(user)
    // {
    //     if(User.password == data.password)
    //     {
    //         return res.json({
    //             message:"Logged In"
    //         })
    //     }
    //     else{
    //         return res.json({
    //             message:"Password is incorrect"
    //         })
    //     }
    // }
    // else{
    //     return res.json({
    //         message:"User Not Found"
    //     })
    // }
}catch(err)
{
    return res.json({
        message:err.message
    })
}

})  

app.listen(3002,()=>{
    console.log("server running on 3002");
})