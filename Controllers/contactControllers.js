const asyncHandler = require("express-async-handler");
const Contact = require("../Models/contactModel"); 
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const GetContacts = asyncHandler( async (req, res) =>{
    const contacts = Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
});

//@desc Creates new contact
//@route Post /api/contacts
//@access private
const CreateContact = asyncHandler( async (req, res) =>{
    console.log("The request body is: ", req.body);
    const{name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All feilds are neccassry to fill!");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id,
    });
    res.status(201).json(contact);
});

//@desc Gets new contact
//@route GET /api/contacts/:id
//@access private
const GetContact = asyncHandler( async (req, res) =>{
    const contact = await Contact.findbyId(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found!");
    }
    res.status(202).json(contact);
});

//@desc Updates new contact
//@route Put /api/contacts/:id
//@access private
const UpdateContact = asyncHandler( async (req, res) =>{
    const contact = await Contact.findbyId(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found!");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
    }

    const UpdateContact = await Contact.findbyId(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(202).json(UpdateContact);
});

//@desc Deletes new contact
//@route Delete /api/contacts/:id
//@access private 
const DeleteContact = asyncHandler( async (req, res) =>{
    const contact = await Contact.findbyId(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found!");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
    }

    await Contact.deleteOne({_id: req.params.id});
    res.status(202).json(DeleteContact);
});

module.exports = {GetContacts, CreateContact, GetContact, UpdateContact, DeleteContact};