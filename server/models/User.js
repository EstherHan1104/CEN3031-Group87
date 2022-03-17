const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema
({
        username: {
                type: String,
                required: true,
                trim: true  
        },
        email: {
                type: String,
                required: true,
                trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        }
});

const User = mongoose.model("users", UserSchema);
module.exports = User;