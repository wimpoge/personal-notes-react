import React from 'react'
import NoteBody from './NoteBody'

function NoteList({ notes }) {
  return (
    <>
        {notes.map(note => (
            <NoteBody 
            key={note.id}
            id={note.id} 
            title={note.title} 
            body={note.body} 
            createdAt={note.createdAt}
           />
        ))}
    </>
    
  );
}

export default NoteList;