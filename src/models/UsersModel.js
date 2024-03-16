import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile_pic: {
        type: String,
        required: false,
        default: 'https://i.pinimg.com/236x/49/93/64/4993642c65077a0e051623e94ade6b3a.jpg'
    },
    access_token: {
        type: String,
    }
}, {
    timestamps: true
})


export const User = model('User', UserSchema);

export const getUsers = () => User.find();

export const getUserByEmail = (email) => User.findOne({email});

export const getUserById = (id) => User.findOne({_id: id});

export const deleteUserById = (id) => User.findByIdAndDelete(id);
export const updateUserById = (id, values) =>
  User.findByIdAndUpdate(id, values, {new: true});