const sql = `CREATE TABLE IF NOT EXISTS games 
            (id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT, description TEXT, difficulty TEXT,
            age_range TEXT)`;

function create_games(db) {
    db.run(sql, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Created the "games" table.');
    }
    )
}

module.exports = {create_games};

