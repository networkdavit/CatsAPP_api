const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.db');

function get_all_breeds(req, res){
    db.all("SELECT * FROM breeds", [], (err, row)=>{
        res.json(row)
    })
}

module.exports = {get_all_breeds};