const mongoose = require("mongoose");

const userSchema =new mongoose.Schema(
    {
        username:{
            type: String,
            required :true
        },
        password:{
            type: String,
            required :true
        },
        email:{
            type: String,
            required :true
        },
        createdOn:{
            type: Date,
            default:Date.now()
        }
    }
);

// mongoose.model('users',userSchema);

module.exports = mongoose.model("users",userSchema);