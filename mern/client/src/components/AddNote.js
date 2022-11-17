import classes from "./css/Note.module.css";
import styles from "./css/AddNotes.module.css";
import {nanoid} from 'nanoid';
import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const characterLimit = 200;

  const changeHandler = (event) => {
    var charVal = event.target.value;
    if (characterLimit - charVal.length >= 0) {
      setNoteText(charVal);
    }
  };
  const saveHandler = async (e) => {
    e.preventDefault();
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      console.log(noteText);
      setNoteText("");
    }
    var data = [{
        "id": nanoid(),
        "date": "02/02/2022",
        "text": noteText
    }]
    await fetch("http://localhost:5000/note/add" , {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((error) => {
      console.log(error);
      window.alert(error);
      return;
    });
  };

  return (
    <div className={`${classes.note} ${styles.noteNew}`}>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={changeHandler}
      ></textarea>
      <div className={classes.footer}>
        <small>{characterLimit - noteText.length} remaning</small>
        <button className={styles.save} onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
};
export default AddNote;
