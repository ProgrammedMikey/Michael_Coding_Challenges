require('../models/db');
const ParentTree = require('../models/parent_tree')
const ChildTree = require('../models/child_tree')

exports.listTree = async(req, res) => {
    try {
        const tree = await ParentTree.find({$query:{label:'root'}, $orderby:{order:1}})
        res.json(tree);
    } catch(err) {
        res.status(400).json( {message: err })
    }
}

exports.insertTree = async(req, res) => {
    const parentID = req.body.parent;

    await ParentTree.create({ label: req.body.label });

    const filterChild = { label: req.body.label };
    const filterParent = { _id: req.body.parent };
    
    doc = await ParentTree.findOne(filterChild);

    const updateChildren = { children: doc._id };

    if (parentID){
        await ParentTree.updateOne(filterParent, { $push: updateChildren });
        
    }else {

        const getRoot = { label: "root" };

        if (req.body.label !== "root"){
            rootParent = await ParentTree.findOne(getRoot);
            const filterRootParent = { _id: rootParent._id };
            await ParentTree.updateOne(filterRootParent, { $push: updateChildren });
        }
    }

    res.json(doc);

}
