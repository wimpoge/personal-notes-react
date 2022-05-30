import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";

function NoteBody({title, body, createdAt, id, onDelete}) {
    return(
        <div className='note-item__title'>
            <NoteItemBody 
            title={title}
            body={body}
            createdAt={createdAt}
            />
            <DeleteButton 
            id={id} 
            onDelete={onDelete}/> 
        </div>
    );
}

export default NoteBody;