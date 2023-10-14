const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 3002
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use(cors())

app.get('/', cors(), (req, res) => {
    res.send('This is coming from the server');
})