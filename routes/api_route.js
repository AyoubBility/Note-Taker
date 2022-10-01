var note_content = require("../db/note_content")

const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(note_content);
    });

    app.post("/api/notes", function(req, res) {
        
        let newNote = req.body;

        let lastId = note_content[note_content.length - 1]["id"];
        let newId = lastId + 1;
        newNote["id"] = newId;
        
        console.log("Req.body:", req.body);
        note_content.push(newNote);


        writeFileAsync("./db/note_content.json", JSON.stringify(note_content)).then(function() {
            console.log("note_content.json has been updated!");
        });

        res.json(newNote);
    });
        
};