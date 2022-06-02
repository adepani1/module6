const { DateTime } = require("luxon")
const { v4: uuidv4 } = require('uuid');

const stories = [
    {
        id: "1",
        title: "A funny story",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat magna sit amet ligula posuere, at euismod arcu elementum.",
        author: "Lijuan",
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)


    },
    {
        id: "2",
        title: "It is raining",
        content: "Integer tortor lectus, commodo vel ex in, rhoncus tincidunt enim.",
        author: "Michale",
        createdAt: DateTime.local(2021, 2, 12, 10, 0).toLocaleString(DateTime.DATETIME_SHORT)

    }
];

exports.find = () => {
    return stories;
}

exports.findById = id => {
    return stories.find(story => story.id === id);
};

exports.save = (story) => {
    story.id = uuidv4();
    story.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    stories.push(story);
}

exports.updateById = function(id, newStory) {
    let story = findById(id);
    if (story) {
        story.title = newStory.title;
        story.content = newStory.content;
        return true;
    } else {
        return false;
    }
}

exports.deleteById = function(id) {
    let index = stories.findIndex(story => story.id = id);
    if (index !== -1) {
        stories.splice(index, 1);
        return true;
    } else {
        return false; 
    }
}