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

//Criar tabelas com sequelize 
// Categories.sync();
//Excluir a tabelas fazer novamente 
// Categories.sync({force: true});
//Verificar se há alguma diferença na tabela, e fazer alteracao nelas
// Categories.sync({alter: true});

//CADASTRAR NO REGISTRO NO BANCO DE DADOS
// Categories.create({
//     name:"Oliveira",
//     email:"senacsp@gmail.com",
//     gender:"M",
//     password:"123"
// })

module.exports = Categories;