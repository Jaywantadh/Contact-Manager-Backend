const express = require("express");
const router = express.Router();
const {GetContacts, CreateContact, GetContact, UpdateContact, DeleteContact} = require("../Controllers/contactControllers");
const validateToken = require("../Middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(GetContacts).post(CreateContact);

router.route("/:id").get(GetContact).put(UpdateContact).delete(DeleteContact);

module.exports = router;