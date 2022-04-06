const router = require('express').Router();
const Course = require('../models/Course');

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
    const qna = req.body.qna;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    
    const newCourse = new Course({ courseName, qna, firstName, lastName });

    newCourse.save()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;