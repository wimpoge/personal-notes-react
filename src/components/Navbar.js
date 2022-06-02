import React from "react";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            }
        });
    
}

    render() {
        return (
            <div className="note-app__header">
                <p>Notes</p>
                <input type="text" placeholder="Search" value={this.state.title} onChange={this.onTitleChangeHandler} />
            </div>
        )
    }
}

// function Search(props){
//     const title = props.title;
//     return(
//         <div className="note-app__header">
//             <p>{title}</p>
//             <Navbar search={props.onSearch}/>
//         </div>
//     )
// }


export default Navbar;
// export {Search};