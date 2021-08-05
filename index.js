import express from 'express';
import mongoose from 'mongoose';
import {DB_URL} from './mongoaccess.js';

const PORT = 5000;
// const DB_URL = 'mongodb+srv://Kosteyyy:Kosteyyy1@cluster0.nru2m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

app.use(express.json())

// app.get('/', (req, res) => {
//     console.log(req.query.test); //http://localhost:5000/?test=here&quary=something&page=Homepage
//     res.status(200).json('Server working on port ')
// })

app.post('/', (req, res) => {
    console.log(req.body); 
    res.status(200).json('Server working on port ')
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true } );
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp();

