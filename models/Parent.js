const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortId = require('shortid');

const ParentSchema = Schema({
  parents: [
   { 
      first : {
        type: String,
        required: true,
      },
      last : {
        type: String,
        required: true,
      },
    }
  ],
  supervisory: [
    { 
      first : {
        type: String,
        required: true,
      },
      last : {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true
      }
    }
  ]
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'supervisors' 
});


 
class Parent {

  static async createParent(data) {
    try {
      let result = await this.create(data);
      return result;
    } catch (err) {
      return err;
    }
  }

}

ParentSchema.loadClass(Parent);
module.exports = mongoose.model('Supervisor', ParentSchema);