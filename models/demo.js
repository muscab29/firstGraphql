const mongoose = require('mongoose')
const demo = new mongoose.Schema({
  firstName: {
    type: "string",
    // required: [true, "please enter a first name"],
    trim: true,
  },
  email: {
    type: "string",
    default:"generatedEmail@gmail.com"
  },
 bookingDate :{
    type : Date,
    // required: [true, "please enter a date"],
    default : Date.now()
 },
 companyName : {
   type:String,
    default:'google'
 },
 phoneNumber: {
    type:Number,
    // required :[true,'please enter a phone number']
 },
 approved:{
   type:Boolean,
   default:true
 }
}, { timestamps: true });



module.exports = mongoose.model("Demo", demo);
