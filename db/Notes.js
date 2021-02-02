const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require('uuid');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Notes {
    read() {
        return readFile("db/db.json", "utf8")
    }
    write(note) {
        return writeFile("db/db.json", JSON.stringify(note))
    }

    getNotes() {
        return this.read().then(rawNotes => {
            let notes = [];
            try {
                notes = notes.concat(JSON.parse(rawNotes))
            } catch (error) {
                notes = [];
            }
            return notes;

        })
    }
    writeNote(note) {
        //create an object for the note and assign and id.
        return ...
    }
    deleteNote(id) {
        //use filter method
        return ... 
    }
}

module.exports = Notes;