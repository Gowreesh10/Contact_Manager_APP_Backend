const asyncHandler = require("express-async-handler");
const Contact = require('../models/contactModel'); 
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async(req,res) =>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc create New contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async(req,res) =>{
    console.log("The content in the body",req.body)
    const {Name,Email,Phone}=req.body;
    if(!Name || !Email || !Phone){
        res.status(400)
        throw new Error("Please provide all the details");
    }
    res.status(201).json({message:"Create contact"});
})

//@desc Get a single contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async(req,res) =>{
    res.status(200).json({message:`Get contact for ${req.params.id}`}); //req.params.id is the id of the contact we want to get
})

//@desc Update a single contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async(req,res) =>{
    res.status(200).json({message:`Update contact for ${req.params.id}`});
})

//@desc Delete a single contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async(req,res) =>{
    res.status(200).json({message:`delete contact for ${req.params.id}`});
})
module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};