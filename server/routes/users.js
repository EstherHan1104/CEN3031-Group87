const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// post request to find 
router.route('/').post((req, res) => {
    User.findOne(req.body)
        .then(result => { 
            if (result) {            
                const token = jwt.sign({
                    email: req.body.email,
                    password: req.body.password
                },  'jwtsecret')

                res.json({ success: true , user: token});
            }
            else {
                res.json({ success: false});
            }

            return result; 
        })
        .catch(err => console.error(`Failed to find: ${err}`));
        
});

// post request to add
router.route('/add').post((req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const username = req.body.username;
            const email = req.body.email;
            const password = req.body.password;
            const isTeacher = req.body.isTeacher;

            if (!firstName || !lastName || !username
                || !email || !password) {
                    res.json({ error: 'EMPTY_FIELD' });
            }
            else if (!email.includes('@')) {
                res.json({ error: 'INVALID_EMAIL' });
            }
            else if (user) {
                res.json({ error: 'USER_EXISTS' });
            }
            else {
                const newUser = new User({ firstName, lastName, username, email, password, isTeacher })

                newUser.save()
                    .then(() => res.json({ error: '' }))
                    .catch(err => res.status(400).json('Error: ' + err));
            }
        })
});

module.exports = router;