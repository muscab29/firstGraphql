const mongoose = require('mongoose')
const purchase = new mongoose.Schema({
 
  amount: {
    type: Number,
    default:100
   
   
  },
  purchaseItem:{
    type:String
  },
  creditInfo:{
    type:"string"
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },



}, { timestamps: true });



module.exports = mongoose.model("Purchase", purchase);
