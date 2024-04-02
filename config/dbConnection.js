const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./that-sky-outfit.db')

module.exports = () => {
    return db;
}