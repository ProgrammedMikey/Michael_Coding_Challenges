const mongoose = require("mongoose"); //import mongoose

// Tree schema
// const TreeSchema = new mongoose.Schema({
//     label: String,
//     parent: {
//       type: mongoose.Schema.Types.ObjectId,
//       default: null,
//       ref: 'Tree'
//     }
// });

const ParentSchema = new mongoose.Schema({
    label: String,
    childIdArr: [{ type: mongoose.Schema.Types.ObjectId,
        ref: "Child"
    }]
});

const ChildSchema = new mongoose.Schema({
    label: {
      type:  String,
      required: true
    },
    parentId:  [{ type: mongoose.Schema.Types.ObjectId,
        ref: "Parent"
    }]
});

const Parent = mongoose.model('parent', ParentSchema);
const Child = mongoose.model('child', ChildSchema);

// const Tree = mongoose.model('Tree', TreeSchema); 
module.exports = Parent;
module.exports = Child;