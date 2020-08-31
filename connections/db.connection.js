const mongoose = require('mongoose');


function connectToOnlineDB() {
    return mongoose.connect(`mongodb+srv://BlackDev:${process.env.DB_PASSWORD}@blog-cluster.1sk9n.mongodb.net/peace-blog?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        }).then(() => {
            console.log("Connected to online db");
        }).catch(err => {
            console.log("Error connecting to local db",err);
        })
}

function connectToLocalDB() {
    return mongoose.connect(``, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }).then(() => {
          console.log("Connected to local db");
      }).catch(err => {
        console.log("Error connecting to local db",err);
    })
}

module.exports = {
    connectToLocalDB, 
    connectToOnlineDB
}