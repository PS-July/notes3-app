import Note from "./Note";
import classes from './css/NotesList.module.css';
import AddNote from "./AddNote";
const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote
  }) => {
  return (
    <div className={classes.notesList}>
      {notes.map(note => (<Note
        key={note.id}
        id={note.id}
        text={note.text}
        date={note.date}
        handleDeleteNote={handleDeleteNote} />


      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );


};
export default NotesList;
