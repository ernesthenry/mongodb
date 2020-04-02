var MongoClient = require('mongodb').MongoClient()

var url = "mongodb://localhost:27017/learning_mongo"

findDocuments = (db, callback) => {
    const collection = db.collection("tours");
    
    collection.find({"tourPackage":"Snowboard Cali"}).toArray((err, docs) =>{
    console.log(docs);
    callback;
})
}


MongoClient.connect(url, (err, db) =>{
    console.log("Connected succesfully to the server");
    findDocuments(db, () =>{
        db.close();
    })  
})
