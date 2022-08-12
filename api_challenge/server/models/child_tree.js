const mongoose = require("mongoose"); //import mongoose

const ChildSchema = new mongoose.Schema({
    label: {
      type:  String,
      required: true
    },
    parent:  { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Parent"
    },
    order: Number

    // parent: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     default: null,
    //     ref: 'Child'
    //   },
    //   ancestors: [{
    //        _id: {
    //           type: mongoose.Schema.Types.ObjectId,
    //           ref: "Child",
    //           index: true
    //        },
    //        label: String,
    //   }]
});

const Child = mongoose.model('child', ChildSchema);


module.exports = Child;