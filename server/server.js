const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();
// app.use(express);
app.use(express.json());

const PORT = process.env.PORT || 3002

app.use(cors())

app.get('/', cors(), (req, res) => {
    res.send('This is coming from the server');
})

app.use('/api/user', userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));