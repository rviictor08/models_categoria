const Sequelize = require('sequelize');
const db = require('../database/db');

const Categories = db.define('raul_categories', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    }
})

module.exports = Categories;
