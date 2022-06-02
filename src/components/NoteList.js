import React from 'react'
import NoteBody from './NoteBody'


function NoteList({ notes, onDelete }) {
  return (
    <>
        {notes.length > 0 ? (
        notes.map((note) => (
          <NoteBody
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>Tidak ada Catatan</p>
      )}
    </>
  );
}

export default NoteList;