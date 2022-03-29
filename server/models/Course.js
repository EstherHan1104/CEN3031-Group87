const mongoose = require("mongoose");

// Course model
const CourseSchema = new mongoose.Schema
({
    name: {
        type: String,
        required: true,
        trim: true
    },
});

const Course = mongoose.model("courses", CourseSchema);
module.exports = Course;