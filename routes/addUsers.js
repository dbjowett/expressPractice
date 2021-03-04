const express = require('express');
const router = express.Router();

// Users array
const users = [];
// GET add-user page
router.get('/add-user', (req, res)=>{
    res.render('addUser');
});

// POST data from adding a user and 
// redirecting back to homepage
router.post('/users', (req,res)=>{
    users.push({user: req.body.user});
    console.log(req.body.user)
    res.redirect('/');
});

// Exporting routes
exports.routes = router;
//Exporting users array
exports.users = users;