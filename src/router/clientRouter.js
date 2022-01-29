const express = require("express");
const router = express.Router();
const multer  = require('multer');
const clientController = require("../controllers/clientController");

const upload = multer({ storage: clientController.storage   })

router.get("/", (req, res, next) => {
    clientController.get(req, res, next);
})

router.post("/", upload.single("avatar_file"), (req, res, next) => {
    clientController.post(req, res, next);
})

router.put("/:id", upload.single("avatar_file"), (req, res, next) => {
    clientController.put(req, res, next);
})

router.delete("/:id", (req, res, next) => {
    clientController.delete(req, res, next);
})

module.exports = router;

