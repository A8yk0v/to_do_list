import React, {useState} from 'react'
import {render} from 'react-dom'
import List from "./components/List/List";
import AddNote from "./components/Add_note/AddField";
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
            //<Note key={this.state.id} id={this.state.id++} text={value} handler_del={this.handleNote_Del} handler_edit={this.handleNote_Edit}/>
            { text: value, handler_del: this.handleNote_Del, handler_edit: this.handleNote_Edit }
            );
        this.setState({notes: notes_tmp});
    }

    handleNote_Del(value) {
        const notes_tmp = this.state.notes.filter((note, index) => {
            return index !== value;
        });
        this.setState({notes: notes_tmp});
    }

    handleNote_Edit(value, index) {
        // TODO
        console.log("handleNote_Edit");
        this.state.notes[index].text = value;
        this.setState({notes: this.state.notes})
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

// function Test() {
//
//     const [notes, setNotes] = useState( Array(0) );
//     const [id, setId] = useState(0);
//
//     function hook_handleNote_Del(value) {
//         // console.log("NOTES.length:", notes.length);
//         // console.log("hook_handleNote_Del value:", value);
//         const notes_tmp = notes.filter((note, index) => {
//             return index !== value;
//         });
//         // console.log("NOTES:", notes);
//         // console.log("hook_handleNote_Del notes_tmp=", notes_tmp);
//         setNotes(notes_tmp);
//         // console.log("NOTES:", notes);
//     }
//
//     function hook_handleNote_Edit(value, index) {
//         // TODO
//         console.log("hook_handleNote_Edit - value");
//         const notes_tmp = notes.slice();
//         notes_tmp[index].text = value;
//         setNotes(notes_tmp);
//     }
//
//     /**
//      * Работаем в функции на прямую ссылкой на notes
//      * @param value
//      */
//     function hook_handleNote_ADD(value) {
//         //const notes_tmp = notes.slice();
//         notes.push(
//             //<Note key={id} id={id} text={value} handler_del={hook_handleNote_Del} handler_edit={hook_handleNote_Edit}/>
//             { text: value, handler_del: hook_handleNote_Del, handler_edit: hook_handleNote_Edit }
//         );
//         setId(id + 1);
//         setNotes(notes);
//     }
//
//     return (
//         <div>
//             <h1>to do list</h1>
//             <AddNote transferData={hook_handleNote_ADD}/>
//             <List notes={notes}/>
//         </div>
//
//     );
// }

render(<Main />, document.getElementById('root'));
