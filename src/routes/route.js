const express= require("express");
const router= express.Router();
const coinsController= require("../controllers/coinsController")

router.get("/getcoins", coinsController.getCrypto)

module.exports= router