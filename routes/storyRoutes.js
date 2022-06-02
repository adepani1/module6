const express = require('express');
const controller = require('../controllers/storyController');
const router = express.Router();

// GET request /Stories: send all stories 

router.get('/', controller.index);

// GET /stories/new: send html form for creating a new story

router.get('/new', controller.new);

// POST /stories: create new story
router.post("/", controller.create);

// GET /stories/:id send details of story identified by id
router.get("/:id", controller.show);

// UPDATE /stories/:id/edit: will send html for editing exsting story
router.get("/:id/edit", controller.edit);

// POST /stories/:id: update the story identified by id
router.put("/:id", controller.update);

//Delete /stories/:id, delete the story identified by the id
router.delete("/:id", controller.delete);

module.exports = router;