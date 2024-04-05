const mongoose = require('mongoose');

const userScheme = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        // validate:function(){
        //     return emailValidator.validate(this.email);
        // }
    },
    password:{
        type:String,
        required:true,

    },
    cpassword:{
            type:String,
            required:true,
           
            // validate:function(){
            //     return this.confirmPassword==this.password;
            // }
    }
})


const userModel = mongoose.model('userModel',userScheme);
module.exports = userModel;