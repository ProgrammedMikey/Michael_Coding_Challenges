const mongoose = require("mongoose"); //import mongoose

const ParentSchema = new mongoose.Schema({
    label: {
        type:  String,
        index: true,
        required: true
      },
      children:  [{ 
          type: mongoose.Schema.Types.ObjectId,
          ref: "Parent"
      }],
});

const Parent = mongoose.model('parent', ParentSchema);

ParentSchema.index({ "$**": 'text'});
module.exports = Parent;