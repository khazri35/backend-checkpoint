
// require express
const express = require("express");
// express router
const router = express.Router();
// require model contact
const Contact= require("../models/Contact");
// require controllers
const controller = require("../controllers/contact.controllers")
//post contact

// @POST method
// @description post a contact
// @path http://localhost:5000/api/contact
// @data params body

router.post('/', controller.addcontact )


//get all contact
// @GET method
// @description get all contact
// @path http://localhost:5000/api/contact
// @data no data
router.get("/", controller.getcontacts )

//get contact by id
// @GET method
// @description get all contact
// @path http://localhost:5000/api/contact/:id
// @data params _id
router.get("/:id", controller.getcontact )


    
    
    //delete contact
// @DELETE method
// @description delete one contact
// @path http://localhost:5000/api/contact/:id
// @data params _id
router.delete("/:id", controller.deletecontact)

    //update contact
// @PUT method
// @description update one contact
// @path http://localhost:5000/api/contact/:id
// @data params _id req.body
router.put("/:id", controller.updatecontact)
    

module.exports = router;