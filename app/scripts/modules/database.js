//META DATA 

var databaseName = "b4rice.db";





var database;

// The below, or something like it, is necessary to use PouchDB functionality!
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
   var pouch = new PouchDB("helloworld", {adapter: 'sqlite'}, function (err, db) {
        if (err) {
            console.log("Error while creating database: " + err)
            for(var e in err) {
                console.log("Error element: " + e + " -> "  + err[e]);
            }
            return;
        }
        console.log("Successfully made new database");
        database = db;

        db.post({title: "Hello, World!" }, {}, function (err, response) {
            console.log("Created doc: " + response.ok);
            console.log("Doc ID:  " + response.id)
            console.log("Revision: " + response.rev)
        })
    });

    console.log("DATABASE ADAPTER: " + pouch.adapter);
};