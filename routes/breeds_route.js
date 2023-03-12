const express = require('express');
const router = express.Router();

router.get("/breeds", (req,res)=>{
  res.send("Get all breeds")
});

module.exports = router;