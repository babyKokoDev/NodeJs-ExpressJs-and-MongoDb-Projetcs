const connectDb = require('./db/connect')
const express = require('express');	
const app = express();
const tasks = require('./routes/tasks');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config()


// Middleware
app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

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

