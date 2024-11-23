const mongoose = require ('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://wesleydumas12:dumas123@cluster0.a8q1e.mongodb.net/');
    bufferTimeoutMS: 20000
    
}

module.exports = startDB;