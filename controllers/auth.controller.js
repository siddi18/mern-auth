import User from "../models/user.model";
import bcryptjs from 'bcryptjs';

export const signup = async(req,res) =>{
    const {username, email, password} = req.body;           // deconstruction
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({
        username, email, password:hashedPassword
    });
    try{
    await newUser.save()                                              // req is the data that we are getting from the client side.
    res.status(201).json({message:"user created successfully"})  ;    // res is the data that we sent back to the client.
    }catch(error){
        res.status(500).json(error.message);
    }
}
    