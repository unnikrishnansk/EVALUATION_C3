const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

router.post("/" , 
    body("age")
    .not()
    .isEmpty()
    .withMessage("Age cannot be empty")
    .if(val < 1 || val>150)
    .withMessage("provide a valid age")
)

router.post("/user", async (req,res) => {
    try{
        const user = await User.create(req.body)
        return res.status(200).send(user)
    }
    catch(error)
    {
        return res.status(500).send({message : error.message})
    }
    
})