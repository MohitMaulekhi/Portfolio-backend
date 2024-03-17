import { Contact } from "../models/contact.model.js"

const contact = async (req,res)=>{
    const {name,email,message} = req.body
    try {
        await Contact.create({
        name,email,message
        })
    } catch (error) {
        throw error
    }
    
    return res.status(201).json({
        statusCode:201,
        message:'Message received succesfully'
    })
}

export {contact}