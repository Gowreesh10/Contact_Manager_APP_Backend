//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res) =>{
    res.status(200).json({message:"Get all the contacts"});
};

//@desc create New contact
//@route POST /api/contacts
//@access public
const createContact = (req,res) =>{
    console.log("The content in the body",req.body)
    const {Name,Email,Phone}=req.body;
    if(!Name || !Email || !Phone){
        res.status(400)
        throw new Error("Please provide all the details");
    }
    res.status(201).json({message:"Create contact"});
}

//@desc Get a single contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req,res) =>{
    res.status(200).json({message:`Get contact for ${req.params.id}`}); //req.params.id is the id of the contact we want to get
}

//@desc Update a single contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req,res) =>{
    res.status(200).json({message:`Update contact for ${req.params.id}`});
}

//@desc Delete a single contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req,res) =>{
    res.status(200).json({message:`delete contact for ${req.params.id}`});
}
module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};