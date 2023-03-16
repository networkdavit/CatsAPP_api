const sql = `CREATE TABLE IF NOT EXISTS quiz_questions 
            (id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT, imageURL TEXT)`;

function create_quiz_questions(db) {
    db.run(sql, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Created the "quiz questions" table.');
    }
    )
}

module.exports = {create_quiz_questions};

