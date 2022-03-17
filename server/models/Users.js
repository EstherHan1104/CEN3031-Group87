const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema
({
        name: String,
        age: Number,
        usernmae: String,
        teacher: Boolean,
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;