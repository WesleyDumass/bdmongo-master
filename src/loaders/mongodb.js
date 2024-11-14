const mongoose = require ('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://wesleydumas:Mudar123@cluster0.r6wge.mongodb.net/');
    bufferTimeoutMS: 20000
    
}

module.exports = startDB;