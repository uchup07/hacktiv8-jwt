const User = require('../models/userModel');

const { generateToken } = require('../helpers/jwt');
const fs = require('fs');
require('dotenv').config();

let getAllUsers = (req, res) => {
    let user = new User();
    let data = user.allUsers();

    res.send(data);
}

let createUser = (req, res) => {
    let user = new User();
    let data = req.body;
    let newData = user.saveUser(data);
    res.send({message: 'Create User Successfully!', data: newData});
}

let updateUser = (req, res) => {
    let user = new User();
    let data = req.body;
    let updateData = user.updateUser(req.params.userId, data);
    res.send({message: "Update User Successfully!", data: updateData});
}

let viewUser = (req, res) => {
    res.setHeader('Content-type','application/json');
    let user = new User();
    if(req.params.userId !== undefined) {
        res.send(user.allUsers().find(item => item.id == req.params.userId));
    } else {
        res.send(getData());
    }
}

let deleteUser = (req, res) => {
    res.send({message: "This is Delete User"});
}

let signIn = (req, res) => {
    try {
        const { username, password } = req.body;

        let user = new User();
        let myUser = {};
        user.allUsers().find(item => {
            if(item.username == username && item.password == password) {
                myUser = item;
            }
        });

        if(!username || !password || (typeof myUser === 'Object' && !myUser.hasOwnProperty('username'))) {
            console.log('Error');
            return res.status(401).json({message: "Username or Password Mismatch"});
        }

        let token = generateToken(myUser);
        //res.cookie("token",token, {maxAge: process.env.JWT_EXPIRED_SECONDS * 1000});
        res.status(200).json({token});
    } catch(err) {
        console.log(err);
        res.status(500).json({message: err.toString(), status: "Error!"});
    }
}

module.exports = { getAllUsers, createUser, updateUser, viewUser, deleteUser, signIn }