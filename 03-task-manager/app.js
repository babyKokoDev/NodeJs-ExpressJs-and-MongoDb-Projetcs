const connectDb = require('./db/connect')
const express = require('express');	
const app = express();
const tasks = require('./routes/tasks');
const notFound = require('./middleware/not-found');
require('dotenv').config()


// Middleware
app.use(express.json())


app.use('/api/v1/tasks', tasks)

app.use(notFound)

const port = 5000

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
       app.listen(port, ()=>{
        console.log(`Server is listening successfully on port ${port}`);
       }) 
    } catch (error) {
       console.log(error);
    }
}

start()

