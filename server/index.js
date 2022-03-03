const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const { User, Contact } = require("./schema");
const cors = require('cors');

const app = express()
app.use(cors())
app.use(bodyparser.json())

app.listen(4000, function (){
    console.log("hi")
});

app.post("/SignUp", async (req, res, next) => {
    try {
        let user = new User({
        email: req.body.email,
        password: req.body.password,
        secret: req.body.secret
        });

        await user.save();

        res.status(200).json(user);
    } catch(error) {
        res.status(400)
    }

    // let c = new Contact({
    //     name: "amu",
    //     email: "amu@a.c",
    //     phone: "+918056231289",
    //     userEmail: "anu@a.c"
    // });
    // c.save();
    next()
})

app.post("/SignIn", async (req, res, next) => {
    try {
        let user = await User.findOne({
        email: req.body.email,

        });
        if (user.password === req.body.password){
            res.status(200).send({ email: req.body.email })
    
        }
        else {res.status(400).send("invalid user")}
    } catch(error) {
        res.status(400)
    }

    // let c = new Contact({
    //     name: "amu",
    //     email: "amu@a.c",
    //     phone: "+918056231289",
    //     userEmail: "anu@a.c"
    // });
    // c.save();
    next()
})

app.post("/CreateContact", async (req, res, next) => {
    try {
        let c = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        userEmail: req.body.userEmail,
    });
    await c.save();

        res.status(200).json(c);
    } catch(error) {
        res.status(400)
    }

    
    next()
})

app.post("/GetContacts", async (req, res, next) => {
    try {
        let contacts = await Contact.find({
        userEmail: req.body.userEmail,

        });
        if (contacts.length <= 0 ){
            res.status(400).send("No contacts found for user " + req.body.userEmail)
    
        }
        else {res.status(200).json(contacts)}
    } catch(error) {
        res.status(400)
    }

    // let c = new Contact({
    //     name: "amu",
    //     email: "amu@a.c",
    //     phone: "+918056231289",
    //     userEmail: "anu@a.c"
    // });
    // c.save();
    next()
})
const CONNECTION_STRING = "mongodb+srv://qwerasdf:qwerasdf@cluster0.nr7fu.mongodb.net/Cluster0?retryWrites=true&w=majority";

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect(CONNECTION_STRING);

        
    } catch(err) {
        console.log(err);
    }
}