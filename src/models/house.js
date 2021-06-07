// House modelis turi street, town, houseNo OwnersId
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const houseSchema = new Schema({
  street: {
    type: String,
    required: true,
  },
  nr: {
    type: String,
    required: true,
  },
  town: {
    type: String,
    required: true,
  },
  ownersId: {
    // susiejam house su owner
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'owner',
  },
});

const House = mongoose.model('house', houseSchema);

module.exports = House;
