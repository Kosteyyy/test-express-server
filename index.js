import express from 'express';
import mongoose from 'mongoose';
import {DB_URL} from './mongoaccess.js';
import Post from "./Post.js";

const PORT = 5000;

const app = express()

app.use(express.json())

// app.get('/', (req, res) => {
//     console.log(req.query.test); //http://localhost:5000/?test=here&quary=something&page=Homepage
//     res.status(200).json('Server working on port ')
// })

app.post('/', async (req, res) => {
    try {
        const {author, title, content, picture} = req.body;
        const post = await Post.create({author, title, content, picture});
        // console.log(req.body); 
        res.json(post)
    } catch (e) {
        res.status(500).json(e)
    }
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

