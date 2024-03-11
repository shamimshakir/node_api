const {v4: uuidv4} = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: "Julian Alvarez",
        email: "alvarez@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Mac allister",
        email: "mac@gmail.com"
    }
];
module.exports = users;