import React from "react";

function NoteItemBody({ title, body, createdAt }) {
  return (
    <div className="note-item">
      <h3 className="note-item__title">{title}</h3>
        <p className="note-item__title">{body}</p>
        <p className="note-item__date">{createdAt}</p>
    </div>
  );
}

export default NoteItemBody;