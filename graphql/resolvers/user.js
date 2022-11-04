const jwt = require('jsonwebtoken')
const bcryptjs = require("bcryptjs")
const User = require('../../models/user')
const { SECRET_KEY } = require('../../configs/config');

function generateToken(user) {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        username: user.username
      },
      SECRET_KEY,
      { expiresIn: '1h' }
    );
  }
  

module.exports = {


    Mutation :{
      async login(_, { username, password }) {
  
   
  
        const user = await User.findOne({ username });
  
        if (!user) {
          throw new Error('User not founddddd');
        }
  
        const match = await bcryptjs.compare(password, user.password);
        if (!match) {
          throw new Error('Wrong crendetials');
        }
  
        const token = generateToken(user);
  
        return {
          ...user._doc,
          id: user._id,
          token
        };
      },

      //////////////////////////


        registerUser : async (_, {registerInput : {username, email , password}})=>{

          
      // TODO: Make sure user doesnt already exist
      const user = await User.findOne({ username });
    
      // hash password and create an auth token
      password = await bcryptjs.hash(password, 12);

      const newUser = new User({
        email,
        username ,
        password,
      });

      const res = await newUser.save();

      const token = generateToken(res);
      console.log(res)
      console.log(`${token}-----------`)

      return {
        ...res._doc,
        id: res._id,
        token
      };
        }
    }



}