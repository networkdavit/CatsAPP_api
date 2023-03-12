const sql = "CREATE TABLE IF NOT EXISTS advice (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT)";

function create_advice(db) {
    db.run(sql, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Created the "advice" table.');
    }
    )
}

module.exports = {create_advice};
