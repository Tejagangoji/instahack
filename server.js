const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {Hack} = require('./Schema');

const app = express();
app.use(cors({
    origin: '*'
}));
app.use(express.json());
mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://login:login@cluster0.xa0jcmi.mongodb.net/?retryWrites=true&w=majority').then(console.log("DB is connected"));

app.post('/', async(req, res) => {
    const {username, password} = req.body;
    const newuser = new Hack({
        username: username,
        password: password
    });
    await newuser.save();
    return res.json(await Hack.find());
});

app.delete('/:id', async(req, res) => {
    await Hack.findByIdAndDelete(req.params.id);
    return res.json(await Hack.find());
})

app.listen(5000, () => console.log("server is running"));
