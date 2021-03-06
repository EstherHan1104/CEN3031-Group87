const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

router.route('/get').get((req, res) => {
    User.find()
        .then(users => { res.json(users) })
        .catch(err => console.log(err));
})

// post request to find 
router.route('/').post((req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => { 
            if (user && bcryptjs.compareSync(req.body.password, user.password)) {            
                const token = jwt.sign({
                    email: req.body.email,
                    password: req.body.password
                },  'jwtsecret')

                res.json({  success: true, user: token, isTeacher: user.isTeacher, 
                            firstName: user.firstName, lastName: user.lastName  });
            }
            else {
                res.json({ success: false});
            }
        })
        .catch(err => console.error(`Failed to find: ${err}`));
        
});

router.route('/find').post((req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => { 
            if (user) {            
                res.json({ success: true, isTeacher: user.isTeacher, courses: user.courses, user: user});
            }
            else {
                res.json({ success: false});
            }
        })
        .catch(err => console.error(`Failed to find: ${err}`));
        
});

// post request to update
router.route('/update').post((req, res) => {
    User.findOneAndUpdate(
        { email: req.body.email },
        { $set: { [req.body.update]: req.body.newValue } },
        { new: true}
    )
     .then(newUser => { res.json({ success: true}) })
})

// post request to add
router.route('/add').post((req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const username = req.body.username;
            const email = req.body.email;
            const pw = req.body.password;
            const isTeacher = req.body.isTeacher;
            const courses = req.body.courses;

            // check for error
            if (!firstName || !lastName || !username
                || !email || !pw) {
                    res.json({ error: 'EMPTY_FIELD' });
            }
            else if (!email.includes('@')) {
                res.json({ error: 'INVALID_EMAIL' });
            }
            else if (user) {
                res.json({ error: 'USER_EXISTS' });
            }
            else {
                // hash password
                const salt = bcryptjs.genSaltSync(10);
                const password = bcryptjs.hashSync(pw, salt);

                const newUser = new User({ firstName, lastName, username, email, password, isTeacher, courses })

                newUser.save()
                    .then(() => res.json({ error: '' }))
                    .catch(err => res.status(400).json('Error: ' + err));
            }
        })
});

module.exports = router;