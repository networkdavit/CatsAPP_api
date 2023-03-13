const express = require('express');
const cors = require('cors');
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const breeds_model = require('./models/breeds_schema');
const advice_model = require('./models/advice_schema');
const breeds_route = require('./routes/breeds_route');
const advice_route = require('./routes/advice_route');


const app = express();
app.use(cors());

const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.log("??");
  }
  console.log('Connected to the database.');
});

breeds_model.create_breeds(db);
advice_model.create_advice(db);

// Mount breeds_route middleware with prefix
app.use('/api/v1', breeds_route);

// Mount advice_route middleware with prefix
app.use('/api/v1', advice_route);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
