const model = require('../models/story');

// GET request /Stories: send all stories 

exports.index = (req, res) => {
    let stories = model.find()
    res.render("./story/index", {stories});
}
// GET /stories/new: send html form for creating a new story

exports.new = (req, res) => {
    res.render("./story/new");
}

// POST /stories: create new story
exports.create = (req, res) => {
    //res.send("created new story");
    let story = req.body;
    model.save(story);
    res.redirect('/stories')
}

// GET /stories/:id send details of story identified by id
exports.show = (req, res) => {
    let id = req.params.id;
    let story = model.findById(id);
    if (story) {
        res.render("./story/show", {story});
    } else {
    res.status(404).send("Cannot find story with id " + id);
    }
}

// UPDATE /stories/:id/edit: will send html for editing exsting story
exports.edit = (req, res) => {
    let id = req.params.id;
    let story = model.findById(id);
    if (story) {
        res.render("./story/edit", {story});
    } else {
    res.status(404).send("Cannot find story with id " + id);
    }
}

// POST /stories/:id: update the story identified by id
exports.update = (req, res) => {
    let story = req.body;
    let id = req.params.id;
    if (model.updateById(id, story)) {
        res.redirect('/stories/'+id);
    } else {
        res.status(404).send("Cannot find story with ID " + id);
    }

}

//Delete /stories/:id, delete the story identified by the id
exports.delete = (req, res) => {
    let id = req.params.id;
    if (model.deleteById(id)) {
        res.redirect("/stories")
    } else {
        res.status(404).send("Cannot find story with ID " + id);
    }
}

