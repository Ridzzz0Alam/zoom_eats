import { Request, Response } from "express";
import User from "../model/User.js";

export const loginUser = async(req:Request, res: Response) => {
    try{
        const {email,name,picture} = req.body

        let user = await User.findOne({email});
        
        if(!user){
            
        }

    }catch(error){

    }
};