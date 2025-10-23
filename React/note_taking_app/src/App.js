// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [noteTitle, setNoteTitle ] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);
  return (
    <div className="App">
      <form>
        <input type = "text" value="{noteTitle}"></input>
        <button>Add Note</button>
      </form>
    </div>
  );
}

export default App;
