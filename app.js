// require modules
const express = require('express');
const ejs = require('ejs');
const morgan = require('morgan');
const methodOverride = require('method-override');
const storyRoutes = require('./routes/storyRoutes');

//create app
const app = express();

//configure app
let port = '3000'; 
let host = 'localhost'
app.set('view engine', 'ejs')

//mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan("tiny"));
app.use('/stories', storyRoutes);
app.use(methodOverride('_method'));


//set up routes
app.get('/', (req, res) => {
    res.render('index');
})

//start the server
app.listen(port, host, () => {
    console.log("Server is running on port " + port);
}) 