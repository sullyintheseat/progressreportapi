const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortId = require('shortid');

const ChildSchema = Schema({
  first : {
    type: String,
    required: true,
  },
  last : {
    type: String,
    required: true,
  },
  parents : {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true
  },
  nick : {
    type: String,
    required: true,
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'children' 
});


 
class Child {

  static async createChild(data) {
    try {
      let result = await this.create(data);
      return result;
    } catch (err) {
      return err;
    }
  }

}

ChildSchema.loadClass(Child);
module.exports = mongoose.model('Child', ChildSchema);