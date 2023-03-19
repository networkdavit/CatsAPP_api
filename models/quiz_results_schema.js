const sql = `CREATE TABLE IF NOT EXISTS quiz_results 
            (id INTEGER PRIMARY KEY AUTOINCREMENT, 
            answer_pattern TEXT, 
            result TEXT,
            imageURL TEXT)`;

function create_quiz_results(db) {
    db.run(sql, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Created the "quiz results" table.');
    }
    )
}

module.exports = {create_quiz_results};