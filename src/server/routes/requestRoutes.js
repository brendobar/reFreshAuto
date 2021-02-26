const Router = require("express");
const r_Requests = require("../models/requests");
const router = Router();

router.post('/api/request', async(req, res) =>{

    try {
        console.log(req.body);
        const {type, telephone, breaking, auto, date} = req.body;
/*
        let tempTime = new Date(date);
        let timezone = tempTime.getTimezoneOffset();
        let milis = tempTime.getTime();
        let nDate = new Date(milis+timezone);
        nDate = nDate.getTime().toString();
        console.log(nDate);
*/
        let nDate = new Date(date);
        nDate = new Date(nDate.setMinutes(nDate.getMinutes() - nDate.getTimezoneOffset()));
        nDate = nDate.toString();
        console.log(nDate, typeof nDate)

        const requests = new r_Requests({type, telephone, breaking, auto, nDate});
        await requests.save();
        return res.json({message:"record written successfully"})
        
    } catch (e) {
        console.log(e);
        res.send({message:"Server error"});
    }
});

router.get("/api/price", (req,res) => {
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://brendobar:root@cluster0.le6bi.mongodb.net/Cluster0?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("Cluster0").collection("price");
        collection.find({}, {projection:{ _id: 0 }}).toArray((e, result) => {
            
            res.send(result);
            client.close();
        });
    });
});

module.exports = router;