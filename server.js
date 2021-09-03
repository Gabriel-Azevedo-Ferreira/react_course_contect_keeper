const express = require('express');
const app = express();

const connectDB = require('./config/db');
connectDB()

const PORT = process.env.PORT || 5000;

app.use(express.json({extended: false}))
app.get('/', (req, res) => res.json(
    {msg: 'Welcome'}
))

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/contact', require('./routes/contact'))
app.use('/api/auth', require('./routes/auth'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))