const mongoose = require("mongoose");

// Course model
const CourseSchema = new mongoose.Schema
({
    courseName: {
        type: String,
        required: true,
        trim: true
    },
    qna: {
        type: Object,
        required: true
    }
});

const Course = mongoose.model("courses", CourseSchema);
module.exports = Course;