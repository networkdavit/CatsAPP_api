const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.db');

function get_all_advice(req, res){
    db.all("SELECT * FROM advice", [], (err, row)=>{
        res.json(row)
    })
}

module.exports = {get_all_advice};