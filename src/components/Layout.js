import React from "react";
import Navbar from "./Navbar";
import NoteInput from "./NoteInput";
import { getInitialData } from "../utils";
import NoteList from "./NoteList";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            isFilter: false,
            filteredNotes: [],
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(query) {
      const searchNotes = this.state.notes.filter(
        (note) =>
          note.title && note.title.toLowerCase().includes(query.toLowerCase())
      );
      this.setState({
        isFilter: query !== "" ? true : false,
        filteredNotes: searchNotes,
      });
    }

    
    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
      }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title,
                body,
              }
            ],
            filteredNotes: [
              ...prevState.filteredNotes,
              {
                id: +new Date(),
                title,
                body,
                createdAt: new Date(),
                archived: false,
              },
            ]
          };
          
        });
      }

    render() {
        return (
            <>
                <Navbar onSearch={this.onSearch} />
                <NoteInput  addNote={this.onAddNoteHandler}/>
                <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
            </>
        );
    }
}

export default Layout;