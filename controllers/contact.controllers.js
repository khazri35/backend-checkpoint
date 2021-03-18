
// add contact
const addcontact =  async (req, res)=>{
    try {
        const newContact= new Contact({...req.body});
        // handling error for name & email
        if (!newContact.name || !newContact.email) {
            res.status(400).send({message: "name and email are required"});
            return;
        }
        const user= await Contact.findOne({email: req.body.email})
        if (user) {
            res.status(400).send({message: "contact already exist"})
        return;
        }
        const result= await newContact.save();      
       res.status(200).send({message: "contact added successfully", result})
    } catch (error) {
       res.status(500).send({message : `${error}`});
    }
    
}
// get all contacts
const getcontacts= async(req, res)=>{
    try {
    const result= await Contact.find()
    res.status(200).send({response: result, message: "get all contact"})
    } catch (error) {
    res.status(404).send({message: "can not get contact"})
    }
}

// get one contact
const getcontact= async(req, res)=>{
    try {
    const result= await Contact.findOne({_id: req.params.id})
    res.status(200).send({response: result, message: "get one contact"})
    } catch (error) {
    res.status(404).send({message: "can not get contact with this id"})
    }
}

// delete contact
const deletecontact=async(req, res)=>{
    const _id= req.params.id;
     try {
     const result= await Contact.findOneAndDelete({_id})
     // console.log(result)
     result ?
     res.status(200).send({response: result, message: "this contact is deleted"})
     : res.send({message: "already deleted"})
     } catch (error) {
     res.status(404).send({message: "can not delete this contact"})
     }
}

const updatecontact= async(req, res)=>{
    try {
    const result= await Contact.updateOne(
        {_id: req.params.id}, 
        {$set: {...req.body}})
    console.log(result)
    result.nModified ?
    res.status(200).send({response: result, message: "this contact is updated"})
    : res.send({response: result, message: "already updated"})
    } catch (error) {
    res.status(404).send({message: `can not update this contact /${error}`})
    }
}

module.exports= controllers= {addcontact, getcontacts, getcontact, deletecontact, updatecontact}