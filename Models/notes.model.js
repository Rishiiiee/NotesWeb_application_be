const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {type: String,required: true,},
  content: {type: String,required: true},
  userId: {type: String,required: true},
  notesImage: {type: String,default: "https://static.vecteezy.com/system/resources/previews/011/360/558/original/pencil-and-notes-cartoon-icon-illustration-education-object-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg"},

});

const notesModel = mongoose.model("notes", notesSchema);

module.exports = notesModel;