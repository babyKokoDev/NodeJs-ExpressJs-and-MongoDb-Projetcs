const mongoose = require('mongoose');



mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex : true,
    useFindAndModify : false,
    useUnifiedTopology : true
})
.then(()=>console.log("Connected to the DataBase"))
.catch((err)=>console.log(err))

