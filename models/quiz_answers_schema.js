const sql = "CREATE TABLE IF NOT EXISTS quiz_answers (id INTEGER PRIMARY KEY AUTOINCREMENT,answer TEXT, question_id INTEGER, FOREIGN KEY(question_id) REFERENCES quiz_questions(id))";

function create_quiz_answers(db) {
    db.run(sql, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Created the "quiz answers" table.');
    }
    )
}

module.exports = {create_quiz_answers};

