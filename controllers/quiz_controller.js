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
            id: row.id,
            text: row.question,
            imageURL: row.imageURL,
            answers: row.answers.split(',')
        }));

        res.json(questions);
    });
}

function get_result(req, res) {
    const answer_id = req.query.answer_id
    const digitFrequency = {}; 

    for (let digit of answer_id.toString()) {
        digitFrequency[digit] = (digitFrequency[digit] || 0) + 1;
    }

    let mostFrequentDigit;
    let highestFrequency = 0;
    for (let digit in digitFrequency) {
        if (digitFrequency[digit] > highestFrequency) {
            mostFrequentDigit = digit;
            highestFrequency = digitFrequency[digit];
        }
    }

    console.log(mostFrequentDigit);
    db.get('SELECT * FROM quiz_results WHERE answer_pattern = ?',[mostFrequentDigit], (err, rows) => {
        res.send(rows)
    })
}

module.exports = { get_quiz_data, get_result };