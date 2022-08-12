
# Michael Da Silva API Challenge


Data schema of choice used here is Mongodb and Mongoose

```
const ParentSchema = new mongoose.Schema({
    label: {
        type:  String,
        required: true
      },
      children:  [{ 
          type: mongoose.Schema.Types.ObjectId,
          ref: "Parent"
      }],
});
```
Sample queries / code that would support the two routes:

Get route query:
```
 try {
        const tree = await ParentTree.find({$query:{label:'root'}, $orderby:{order:1}})
        res.json(tree);
    } catch(err) {
        res.status(400).json( {message: err })
    }
```
Post route query:

```
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
```
