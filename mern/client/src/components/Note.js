import { MdDeleteForever } from "react-icons/md";
import classes from './css/Note.module.css';
const Note = ({id, text, date, handleDeleteNote}) => {
  return (
    <div className={classes.note}>
      <span>{text}</span>
      <div className={classes.footer}>
        <small>{date}</small>
        <MdDeleteForever 
        onClick={() => handleDeleteNote(id)} 
        className="delete-icon" 
        size='1.3em' 
        />
      </div>
    </div>
  );
};
export default Note;
