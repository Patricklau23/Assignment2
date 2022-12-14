/*File name:routes/book.js
Student name: Pak Tak Lau 
Student ID: 301224147   
Date: 19 Oct 2022*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let bookController = require('../controllers/book');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Contact BookList page */
router.get('/', bookController.displayBookList);

/* GET Route for displaying the Add page*/
router.get('/add', requireAuth, bookController.displayAddPage);

/* POST Route for processing the Add page */
router.post('/add', requireAuth, bookController.processAddPage);

/* GET Route for displaying the Edit page*/
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

/* POST Route for processing the Edit page*/
router.post('/edit/:id', requireAuth, bookController.processEditPage);

/* GET Route for performing delete*/
router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports = router;