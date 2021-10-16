const express = require('express');
const QuestionController = require("./controller/QuestionController");
const room_controller = require("/controller/room_controller");
const route = express.Router();

route.get('/', (req, res) => res.render("index", {page: "enter-room"}));
route.get('/create-pass', (req, res) => res.render("index", {page: "create-pass"}));

route.get('/room', (req, res) => res.render("room"));

route.post('/room/:room/:question/:action', QuestionController.index);
route.post('/room/create-room', room_controller.create);

module.exports = route;