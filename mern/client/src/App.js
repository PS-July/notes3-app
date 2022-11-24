import React, { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);


  // This method fetches the records from the database.
  useEffect(() => {
    async function getNotes() {
      const response = await fetch(`http://localhost:5000/note/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const notes = await response.json();
      setNotes(notes);
    }

    getNotes();

    return;
  }, [notes.length]);


  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = async (id) => {
    //returns a new array without the note that has the passed in id
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });

    const newNotes = notes.filter((el) => el._id !== id);
    setNotes(newNotes);
  };

  return (
    //if darkmode = true then add the classs darkMode
    <div className={`${darkMode && "darkMode"}`}>
      <div className="container">
        <Header toggleDarkModeHandler={setDarkMode} />
        <Search searchHandler={setSearchText} />
        <NotesList
          notes={
            notes
            //notes.filter((note) => note.text.toLowerCase().includes(searchText))
          }
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>

    </div>
  );
};
export default App;
