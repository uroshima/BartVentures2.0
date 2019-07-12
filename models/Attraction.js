const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttractionSchema = new Schema({
  name: {
    type:String,
    required:true
  },
  lat: {
    type: Number,
    required:true
  },
  lng: {
    type:Number,
    required:true
  },
  description: {
    type:String,
    required:true
  },
  Bartobj: {
    name: String,
    abbr: String,
    lat: Number,
    lng: Number
  },
  image: String
});



module.exports = Attractions = mongoose.model('Attractions', AttractionSchema);
