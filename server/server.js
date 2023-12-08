const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const expressAsyncHandler = require('express-async-handler');
const User = require("./models/userModel");
const generateToken = require("./config/generateToken");


dotenv.config();
connectDB();

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3002



app.get('/', cors(), async (req, res) => {
    res.send('This is coming from the server');
})

// app.use('/api/user',userRoutes)
// app.post('/', cors(), (req, res) => {
//     // Echo back the sent JSON body
//     res.json(req.body);
// });

// app.post('/user', cors(), asyncHandler((req, res) => {
//     console.log(req.body);  
//     const { name, email, password, pic } = req.body;
  
//     // if (!name || !email || !password) {
//     //     res.status(400);
//     //     throw new Error("Please Enter all the Fields");
//     // }
  
//     // registerUser(name, email, password, pic)
   


//     // res.json(req.body);
//     }));


 const registerUser = expressAsyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;
  
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please Enter all the Feilds");
    }
  
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
  
    const user = await User.create({
      name,
      email,
      password,
      pic,
    });
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,

        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  });

  const authUser = expressAsyncHandler(async(req, res) => {

    const {email, password} = req.body;

    const user = await User.findOne({email});

    if (user && ()){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        })
    } else {
        res.status(401);
        throw new Error("Invalid username or password")
    }


  })

  app.post('/user', cors(), registerUser);

  
   

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));