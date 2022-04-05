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
    const name = req.body.name;
    
    const newCourse = new Course({ name });

    newCourse.save()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;