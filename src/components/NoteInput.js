import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            counter: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }
      
      onTitleChangeEventHandler(event, limitChar) {
        const maxChar = limitChar;
        if (event.target.value.length <= maxChar) {
        this.setState((prevState) => {
          return {
            ...prevState,
            title: event.target.value,
            counter: maxChar - event.target.value.length,
          }
        });
      } else {
        return alert("You have reached the limit of characters");
      }
    }
      
      onBodyChangeEventHandler(event) {
        this.setState((prevState) => {
          return {
            ...prevState,
            body: event.target.value,
          }
        });
      }
      
      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState((prevState) => {
          return {
            ...prevState,
            title: '',
            body: '',
            counter: 50,
          }
        });

      }

    render() {
        return (
            <div className="note-input">
                <form onSubmit={this.onSubmitEventHandler}>
                    <p>Sisa karakter: {this.state.counter}</p>
                    <input type="text" placeholder="Judul" value={this.state.title} onChange={(e) => this.onTitleChangeEventHandler(e, 50)} />
                    <textarea type="text" placeholder="Text" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Submit</button>
                    
                </form>
            </div>
        )
    }
}


export default NoteInput;