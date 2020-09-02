const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const staffSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true,
    min: 10
  },
  leaves: {
         type: Number,
       required: true
     },
     dob: {
          type: Date,
          required: true
       },
  designation: {
     type:String,
      requird:true
  },


 salary: {
     type: Number,
     required: true
 },

 bank_details: {
    type: String,
     required: true
 }

});

const Staff = mongoose.model("Staff", staffSchema);
module.exports = Staff;