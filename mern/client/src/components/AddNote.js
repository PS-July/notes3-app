import classes from './css/Note.module.css';
import styles from './css/AddNotes.module.css'
import { useState } from 'react';


const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');

    const characterLimit = 200;

    const changeHandler = (event) => {
        var charVal = event.target.value;
        if(characterLimit - charVal.length >= 0){
            setNoteText(charVal);
        }
    }
    const saveHandler = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            console.log(noteText);
            setNoteText('');
        }
    }

    return (
        <div className={`${classes.note} ${styles.noteNew}`}>
            <textarea rows="8" cols="10" placeholder="Type to add a note..."
                value={noteText} onChange={changeHandler}
            >
            </textarea>
            <div className={classes.footer}>
                <small>{characterLimit-noteText.length} remaning</small>
                <button className={styles.save} onClick={saveHandler}>Save</button>
            </div>
        </div>
    )
}
export default AddNote;