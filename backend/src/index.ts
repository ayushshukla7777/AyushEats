import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { MongoClient } from 'mongodb'

const app = express()
app.use(cors())
app.use(express.json());

const url = process.env.MONGODB_CONNECTION_STRING

const client = new MongoClient(`${url}`);
client.connect().then(() => {
    console.log("connected to database");
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})