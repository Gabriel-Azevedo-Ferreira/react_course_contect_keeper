const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = () => {
    mongoose
        .connect(db, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
        .then(() => console.log("Mongo DB is connected"))
        .catch(err => {
            console.error("ERROR!! " + err.message);
            process.exit(1)
        })
}
module.exports = connectDB;