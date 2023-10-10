import { useEffect, useState } from "react";
import NotesList from "./Components/NotesList";
import { nanoid } from "nanoid";
import Header from "./Components/Header";
import Search from "./Components/Search";

function App() {

  const [notes, setNotes] = useState([
    { 
      id: nanoid(10),
      text: "This is my first note",
      date: "10/10/23"
    },

    { 
      id: nanoid(10),
      text: "This is my second note",
      date: "15/10/23"
    },

    { 
      id: nanoid(10),
      text: "This is my third note",
      date: "28/10/23"
    }
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );


    if (savedNotes) {
      console.log("Data found");
      setNotes(savedNotes);
    }
  }, []);   // run on first load


  // saving data locally
  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(notes)
    );
  }, [notes]);  // on any change to the original notes list save to local item (replace and add new)

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];   // copy the previous notes array and append the newNote Object to it
    setNotes(newNotes);    // finally set the notes array to the updated notes array will cause component to rerender (very important)
  };

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList 
        notes={notes.filter((note) => 
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote = {handleDeleteNote}
      />
    </div>
    </div>
  );
}

export default App;
