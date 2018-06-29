const express = require('express');
const router = express.Router();
const Task = require('../models/task'); 

router.get('/', async (req, res) => {
   const tasks = await Task.find();
   console.log(tasks);
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const {title, description} = req.body;
    const task = new Task({title,description});
    res.json('received');
});

module.exports = router;