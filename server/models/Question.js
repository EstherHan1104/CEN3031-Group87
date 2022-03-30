const mongoose = require("mongoose");

// question model
const QuestionSchema = new mongoose.Schema
({
        teacherID: {
                type: int
        },
        question: {
                type: String,
                required: true,
                trim: true
        },

        choice: [
                {type: String},
                {type: String},
                {type: String},
                {type: String},
                {type: String},
        ]
                

        
});

const Question = mongoose.model("questions", QuestionSchema);
module.exports = Question;