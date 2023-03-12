const express = require('express');
const router = express.Router();

router.get("/advice", (req,res)=>{
  res.send("Get all advice")
});

module.exports = router;