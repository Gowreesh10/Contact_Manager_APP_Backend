const express = require('express')
const router = express.Router(); // Create express router

router.route('/').get((req,res) =>{
    res.status(200).json({message:"Get all the contacts"});
});

router.route('/').post((req,res) =>{
    res.status(200).json({message:"Create contact"});
});

router.route('/:id').get((req,res) =>{
    res.status(200).json({message:`Get contact for ${req.params.id}`}); //req.params.id is the id of the contact we want to get
});

router.route('/:id').put((req,res) =>{
    res.status(200).json({message:`Update contact for ${req.params.id}`});
});

router.route('/:id').delete((req,res) =>{
    res.status(200).json({message:`delete contact for ${req.params.id}`});
});

module.exports=router; // Export router
