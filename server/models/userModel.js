const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);


const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    pic: {type: String, default:"https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.webp"},


},
{timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User; 
