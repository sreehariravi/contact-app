const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     email:String , password:String , secret:String
});

const User = mongoose.model('User', userSchema);

exports.User = User;

const contactSchema = new mongoose.Schema({
    name:String , phone:String , email:String , userEmail:String
});

const Contact = mongoose.model('Contact', contactSchema);

exports.Contact = Contact;
