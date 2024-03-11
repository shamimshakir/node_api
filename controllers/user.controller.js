let users = require("../models/users.model");
const {v4: uuidv4} = require("uuid");


const getAllUser = (req, res) => {
    res.status(200).json({users})
}

const createUser = (req, res) => {
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email
    }
    users.push(newUser);
    res.status(201).json({users})
}

const updateUser = (req, res) => { 
    const id = req.params.id;
    users.filter(user => user.id == id).map(user => {
        user.username = req.body.username;
        user.email = req.body.email;
        return user;
    })
    res.status(201).json({users})
}

const deleteUser = (req, res) => { 
    const id = req.params.id; 
    users = users.filter(user => user.id !== id);
    res.status(201).json({users})
}

module.exports = {getAllUser, createUser, updateUser, deleteUser}