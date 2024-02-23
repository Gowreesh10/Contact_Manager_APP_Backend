const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const connect = await mongoose.connect('mongodb+srv://Gowreesh:Admin1234@gowreeshcluster.bg0gwkp.mongodb.net/?retryWrites=true&w=majority&appName=Gowreeshcluster');
        console.log('Database connected :',connect.connection.host,connect.connection.name)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB
