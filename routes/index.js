const express = require('express');
const router = express.Router();
const addUserData = require('./addUsers'); 

//Users array
// const users = addUserData.users;

// GET request for homepage
router.get('/', (req,res,next)=>{
    const users = addUserData.users;
    res.render('index', {usernames : users});
});

// Exporting GET request for homepage
module.exports = router;