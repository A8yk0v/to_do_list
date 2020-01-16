import React from 'react'
import {render} from 'react-dom'
import List from "./components/List/List";
import AddNote from "./components/Add_note/AddNote";
import Note from "./components/Note/Note";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: Array(),
            id: 0,
        };
        this.handleNote_Del = this.handleNote_Del.bind(this);
        this.handleNote_Edit = this.handleNote_Edit.bind(this);
        this.handleNote_ADD = this.handleNote_ADD.bind(this);
    }

    handleNote_ADD(value) {
        const notes_tmp = this.state.notes.slice();
        notes_tmp.push(
            <Note key={this.state.id} id={this.state.id++} text={value} handler_del={this.handleNote_Del} handler_edit={this.handleNote_Edit}/>
            );
        this.setState({notes: notes_tmp});
    }

    handleNote_Del(value) {
        const notes_tmp = this.state.notes.filter((note) => {
            return note.props.id !== value;
        });
        this.setState({notes: notes_tmp});
    }

    handleNote_Edit(value, id) {
        // TODO
        console.log("handleNote_Edit");

        // let tmp = this.state.notes.find((T) => {
        //     return T.props.id == id;
        // });
        // tmp.props.text = value;
        // this.setState({tmp: tmp});
    }

    render() {
        const arg = {
            // // cursor: "pointer",
            // width: 500,
            // position: "relative",
            // alignItems: "center",
            // padding: "12px 8px 12px 40px",
            // background: "#eee",
            // // fontSize: "18px",
            // ----
            // margin: 0,
            // position: "absolute",
            // left: "50%",
            // //marginRight: "-50%",
            // transform: "translate(-50%, -50%)",
        };

        return (
            <div style={arg}>
                <h1>to do list</h1>
                <AddNote transferData={this.handleNote_ADD}/>
                <List notes={this.state.notes}/>
            </div>
        )
    }

}

render(<Main />, document.getElementById('root'));
