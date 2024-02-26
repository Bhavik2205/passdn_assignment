import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userType = ['staff', 'admin', 'user'];

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    type: {
        type: String,
        enum: userType,
        required: true
    }
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});

var User = mongoose.model('User', userSchema)

export default User;