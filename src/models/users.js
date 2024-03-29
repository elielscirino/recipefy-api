const Sequelize = require('sequelize');
const database = require('../db');

const Users = database.define('Usuário', {
    id: 
    {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nome:
    {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    senha: 
    {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email:
    {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    foto:
    {
        type: Sequelize.STRING
    },
    peso:
    {
        type: Sequelize.FLOAT
    },
    altura:
    {
        type: Sequelize.FLOAT
    }


});

module.exports = Users;