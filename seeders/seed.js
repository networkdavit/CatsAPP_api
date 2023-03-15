const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data.json');

const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const breeds = jsonData.breeds;
const food = jsonData.food;
const interactive_games = jsonData.interactive_games;

async function seedBreeds() {
    const db = new sqlite3.Database('../database.db');
    db.run("DELETE FROM breeds")
    for (const breed of breeds) {
        await new Promise((resolve, reject) => {
          db.run('INSERT INTO breeds (id, title, description, age, origin, isFavorite, pros, cons, imageURL, advice) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)', [breed.id, breed.title, breed.description, breed.age, breed.origin, breed.isFavorite, breed.pros, breed.cons, breed.imageURL, breed.advice], (error) => {
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

async function seedGames() {
    const db = new sqlite3.Database('../database.db');
    db.run("DELETE FROM games")
    for (const game of interactive_games) {
        await new Promise((resolve, reject) => {
          db.run('INSERT INTO games (id, title,video_id, description) VALUES (?, ?, ?, ?)', [game.id, game.title,game.video_id, game.description], (error) => {
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

async function seedFood() {
    const db = new sqlite3.Database('../database.db');
    db.run("DELETE FROM food")
    for (const cat_food of food) {
        await new Promise((resolve, reject) => {
          db.run('INSERT INTO food (id, brand, cat_type, reason, imageURL) VALUES (?, ?, ?,?,?)', [cat_food.id, cat_food.brand, cat_food.cat_type, cat_food.reason, cat_food.imageURL], (error) => {
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
seedGames();
seedFood();