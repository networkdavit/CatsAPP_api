const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.db');
function get_quiz_data(req, res) {

    db.all(`
      SELECT q.id, q.question, q.imageURL, GROUP_CONCAT(a.answer) AS answers
      FROM quiz_questions q
      JOIN quiz_answers a ON q.id = a.question_id
      GROUP BY q.id
    `, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal server error');
            return;
        }

        const questions = rows.map(row => ({
            text: row.question,
            imageURL: row.imageURL,
            answers: row.answers.split(',')
        }));

        res.json(questions);
    });
}

module.exports = {get_quiz_data};