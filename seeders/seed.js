const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data.json');

const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const breeds = jsonData.breeds;
const food = jsonData.food;
const interactive_games = jsonData.interactive_games;
const quiz_questions = jsonData.quiz_questions;
const quiz_answers = jsonData.quiz_answers;
const quiz_results = jsonData.quiz_results;

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
          db.run('INSERT INTO games (id, title, description, difficulty, age_range) VALUES (?, ?, ?, ?, ?)', [game.id, game.title, game.description, game.difficulty, game.age_range], (error) => {
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
          db.run('INSERT INTO food (id, brand, cat_type, imageURL, website) VALUES (?, ?, ?,?,?)', [cat_food.id, cat_food.brand, cat_food.cat_type, cat_food.imageURL, cat_food.website], (error) => {
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

async function seedQuizQuestions() {
  const db = new sqlite3.Database('../database.db');
  db.run("DELETE FROM quiz_questions")
  for (const question of quiz_questions) {
      await new Promise((resolve, reject) => {
        db.run('INSERT INTO quiz_questions (id, question, imageURL) VALUES (?, ?, ?)', [question.id, question.question, question.imageURL], (error) => {
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

async function seedQuizAnswers() {
  const db = new sqlite3.Database('../database.db');
  db.run("DELETE FROM quiz_answers")
  for (const answer of quiz_answers) {
      await new Promise((resolve, reject) => {
        db.run('INSERT INTO quiz_answers (id, answer, question_id) VALUES (?, ?, ?)', [answer.id,answer.answer, answer.question_id], (error) => {
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

async function seedQuizResults() {
  const db = new sqlite3.Database('../database.db');
  db.run("DELETE FROM quiz_results")
  for (const result of quiz_results) {
      await new Promise((resolve, reject) => {
        db.run('INSERT INTO quiz_results (id, answer_pattern,result, imageURL) VALUES (?, ?, ?, ?)', [result.id, result.answer_pattern,result.result, result.imageURL], (error) => {
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
seedQuizQuestions();
seedQuizAnswers();
seedQuizResults();