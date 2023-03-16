const sql = `CREATE TABLE IF NOT EXISTS breeds 
            (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, 
            description TEXT, age INTEGER, origin TEXT, 
            isFavorite INTEGER, pros TEXT, cons TEXT, 
            imageURL TEXT, advice TEXT)`;

function create_breeds(db) {
    db.run(sql, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Created the "breeds" table.');
    }
    )
}

module.exports = {create_breeds};

