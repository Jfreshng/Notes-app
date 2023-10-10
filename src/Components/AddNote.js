import { useState } from "react";

const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState('');

    const [errMsg, setErrMsg] = useState(null);

    const characterLimit  = 200;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value); 
        }
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        } else {
            setErrMsg("cant save empty task");
            // display error messages later
        }
    }

    return ( 
        <div className="note new">
            <textarea name="add note" cols="100" rows="8" placeholder="Type to add note..." onChange={handleChange} value={noteText}></textarea>
            <div className="note-footer">
                <small>{ characterLimit - noteText.length } Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
     );
}
 
export default AddNote;