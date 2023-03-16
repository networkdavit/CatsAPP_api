const sql = `CREATE TABLE IF NOT EXISTS food 
            (id INTEGER PRIMARY KEY AUTOINCREMENT, brand TEXT, 
            cat_type TEXT, reason TEXT, imageURL TEXT)`;

function create_food(db) {
    db.run(sql, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Created the "food" table.');
    }
    )
}

module.exports = {create_food};

