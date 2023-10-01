var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE leaderboard (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            score integer, 
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (name, score) VALUES (?,?,?)'
                db.run(insert, ["test1",1])
                db.run(insert, ["test2",2])
                db.run(insert, ["test3",32])
                db.run(insert, ["test4",4])
                db.run(insert, ["test5",5])
                db.run(insert, ["test6",6])
                db.run(insert, ["test7",12])
                db.run(insert, ["test8",10])
                db.run(insert, ["test9",12])
                db.run(insert, ["test10",9])
                db.run(insert, ["test11",17])
                db.run(insert, ["test12",13])
                db.run(insert, ["test13",31])
                db.run(insert, ["test14",12])
                db.run(insert, ["test15",21])
                db.run(insert, ["test16",11])
                db.run(insert, ["test17",20])
                db.run(insert, ["test18",11])
            }
        });  
    }
});


module.exports = db

