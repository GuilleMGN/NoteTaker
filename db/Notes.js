const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require('uuid');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// Methods for the Notes class
class Notes {
    read() {
        return readFile("db/db.json", "utf8")
    }
    write(note) {
        return writeFile("db/db.json", JSON.stringify(note))
    }
    getNotes() {
        // Display note
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
        // Create an object for the new note and assign and id 
        const newNote = {
            title: note.title,
            text: note.text,
            id: uuidv4()
        }
        // Add note info to array
        return this.getNotes().then(notesArr =>
            [...notesArr, newNote]).then(updatedNotesArr =>
                this.write(updatedNotesArr)).then(() =>
                    newNote);
    }
    deleteNote(id) {
        // Remove note by id
        return this.getNotes().then(oldNotes =>
            oldNotes.filter((note) =>
                note.id !== id)).then(updatedNotesArr =>
                    this.write(updatedNotesArr));
    }
}

module.exports = new Notes();