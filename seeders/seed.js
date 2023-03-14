const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data.json');

const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const breeds = jsonData.breeds;
const pieces_of_advice = jsonData.pieces_of_advice;
async function seedBreeds() {
    const db = new sqlite3.Database('../database.db');
    db.run("DELETE FROM breeds")
    for (const breed of breeds) {
        await new Promise((resolve, reject) => {
          db.run('INSERT INTO breeds (id, title, description, age, origin, isFavorite, pros, cons, imageURL) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [breed.id, breed.title, breed.description, breed.age, breed.origin, breed.isFavorite, breed.pros, breed.cons, breed.imageURL], (error) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        });
      }
    
      db.close();
}

async function seedAdvice() {
    const db = new sqlite3.Database('../database.db');
    db.run("DELETE FROM advice")
    for (const advice of pieces_of_advice) {
        await new Promise((resolve, reject) => {
          db.run('INSERT INTO advice (id, title, description) VALUES (?, ?, ?)', [advice.id, advice.title, advice.description], (error) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        });
      }
    
      db.close();
}

seedBreeds();
seedAdvice();