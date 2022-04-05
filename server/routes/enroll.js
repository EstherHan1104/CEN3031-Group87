const router = require('express').Router();
const User = require('../models/User');
const Course = require('../models/Course');
const { db } = require('../models/Course');

// post request to add
router.route('/').post((req, res) => {
    Course.findOne({ name: req.body.name })
        .then(course => {
            if (course) {
                User.findOneAndUpdate(
                    { email: req.body.email },
                    { $push: { courses: course }}, 
                    { new: true }          
                )
                    .then(res.json({ success: true }));
            }
        })
});

module.exports = router;