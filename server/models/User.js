const mongoose = require("mongoose");

// User model
const UserSchema = new mongoose.Schema
({
        firstName: {
                type: String,
                required: true,
                trim: true
        },
        lastName: {
                type: String,
                required: true,
                trim: true
        },
        username: {
                type: String,
                required: true,
                trim: true, 
        },
        email: {
                type: String,
                required: true,
                trim: true,
                unique: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        isTeacher: {
                type: Boolean,
                required: true,
        }
});

const User = mongoose.model("users", UserSchema);
module.exports = User;