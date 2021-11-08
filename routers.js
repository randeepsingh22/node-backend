const express = require("express");

const router = express.Router();

const User = require("./users");

router.get(
    "/",async (req,res)=>{
        // res.send("Get Users REQ")
        
            // res.json({
            //     name : 'Randeep',
            //     title: 'bedi'
            // })
            const user = await User.find();
            res.json(user);

        
       

    }
)
router.get(
    "/:id",async (req,res)=>{
        // res.send("Get Users REQ")
        
            // res.json({
            //     name : 'Randeep',
            //     title: 'bedi'
            // })
            const user = await User.findById(req.params.id);
            res.json(user);
    }
)
router.patch(
    "/:id",async (req,res)=>{
            const user = await User.findById(req.params.id);
            user.username = req.body.username;
            const updateData = await user.save();

            res.json(updateData);
    }
)
router.patch(
    "/delete/:id",async (req,res)=>{
            const user = await User.findById(req.params.id);
            if(user != null){
                const updateData = await user.remove();
                res.json(updateData);
            }
            else{
res.json({
    status : 0,
    message : "No data found"
})
            }
            // user.username = req.body.username;

            
    }
)

router.post(
    "/",async(req,res)=>{
        const user = new User({
            username : req.body.username,
            password : req.body.password,
            email: req.body.email,
            createdOn:req.body.createdOn

    });
    console.log(user.username);
    try {
        
    const savedData = await user.save();
    res.json({
        status: 200,
        message:"Data Uploaded Successfully"
    });
    }
    catch(e){
        res.send(e)
    }

    }
);

module.exports = router;