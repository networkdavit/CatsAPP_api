const express = require('express');
const cors = require('cors');
const PORT = 3000;
const sqlite3 = require('sqlite3').verbose();

const breeds_model = require('./models/breeds_schema');
const food_model = require('./models/food_schema');
const games_model = require('./models/games_schema');
const quiz_questions_model = require('./models/quiz_questions_schema');
const quiz_answers_model = require('./models/quiz_answers_schema');

const breeds_route = require('./routes/breeds_route');
const food_route = require('./routes/food_route');
const games_route = require('./routes/games_route');



const app = express();
app.use(cors());

const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.log("??");
  }
  console.log('Connected to the database.');
});

breeds_model.create_breeds(db);
food_model.create_food(db);
games_model.create_games(db);
quiz_questions_model.create_quiz_questions(db);
quiz_answers_model.create_quiz_answers(db);

// Mount breeds_route middleware with prefix
app.use('/api/v1', breeds_route);

// Mount advice_route middleware with prefix
app.use('/api/v1', food_route);
app.use('/api/v1', games_route);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
