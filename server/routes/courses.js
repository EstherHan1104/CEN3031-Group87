const router = require('express').Router();
const Course = require('../models/Course');
const User = require('../models/User');

// post request to find 
router.route('/').post((req, res) => {
    Course.findById(req.body._id)
        .then(course => {
            res.json({ course: course });
        })
});

// post request to add
router.route('/add').post((req, res) => {
    const courseName = req.body.courseName;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const modules = req.body.modules;

    const newCourse = new Course({ courseName, firstName, lastName, modules });
    console.log(newCourse.courseName);
    newCourse.save()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;