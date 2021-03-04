// Express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// App settings
app.set('view engine', 'pug');
app.set('views', 'views');

// Route imports
const addUserData = require('./routes/addUsers'); 
const indexRoute = require('./routes/index')

// 3rd Party Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// App Middleware from imports
app.use(addUserData.routes);
app.use(indexRoute);


// 404 
app.use((req,res,next)=>{
    res.status(404).render('404');
});

// Listen
app.listen(port, ()=>{ console.log(`Listening on port: ${port}`)});
