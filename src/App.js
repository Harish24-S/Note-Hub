import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "17/03/2024"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "18/03/2024"
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "19/03/2024"
    },
    {
      id: nanoid(),
      text: "This is my new note",
      date: "20/03/2024"
    }
  ])
  return (
    <div className='container'>
        <NotesList notes={notes} />
    </div>
  )
}

export default App