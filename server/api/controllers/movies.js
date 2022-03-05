// const userModel = require("../../models/movies-model");
const {Sequelize} = require('sequelize');
const cs = require("../connection/connectionData");
const mysql = require("mysql2");
// const bcrypt = require("bcrypt");
const {QueryTypes} = require('sequelize');
// const jwt = require("jsonwebtoken");
// const myKey = require("../connection/myKey");

const sequelize = new Sequelize(cs.database, cs.user, cs.password, {
    host: cs.host,
    port: cs.port,
    dialect: 'mysql',
});

try {
    sequelize.authenticate()
        .then(res => console.log('Connection has been established successfully.',
            sequelize.getDatabaseName()))
        .catch(err => console.log(err));

} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports.getAllUsers = function (req, res, next) {

    const usersTable = sequelize.define("usersModel", {},
        {tableName: "Users"});

        usersTable.findAll({attributes: ['id', 'firstName']})
        .then (result=>{
            res.send(result);
        })
        .catch(err=>{console.log(err)});
}

module.exports.getAllMovies = function (req, res, next) {

    const moviesTable = sequelize.define("moviesModel", {},
        {tableName: "movies"});

        moviesTable.findAll({attributes: ['id', 'name', 'time', 'rating']})
        .then (result=>{
            res.send(result);
        })
        .catch(err=>{console.log(err)});
}
