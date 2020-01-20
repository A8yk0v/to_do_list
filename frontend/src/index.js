import React, {useCallback, useState, useEffect} from 'react'
import {render} from 'react-dom'
import List from "./components/List/List";
import AddNote from "./components/Add_note/AddField";
import Note from "./components/Note/Note";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: Array(),
            //id: 0,
        };
        this.handleNote_Del = this.handleNote_Del.bind(this);
        this.handleNote_Edit = this.handleNote_Edit.bind(this);
        this.handleNote_ADD = this.handleNote_ADD.bind(this);
    }

    handleNote_ADD(value) {
        const notes_tmp = this.state.notes.slice();
        notes_tmp.push(
            //<Note key={this.state.id} id={this.state.id++} text={value} handler_del={this.handleNote_Del} handler_edit={this.handleNote_Edit}/>
            { text: value, isActive: true, handler_del: this.handleNote_Del, handler_edit: this.handleNote_Edit }
            );
        this.setState({notes: notes_tmp});
    }

    handleNote_Del(value) {
        const notes_tmp = this.state.notes.filter((note, index) => {
            return index !== value;
        });
        console.log("handleNote_Del notes", this.state.notes);
        this.setState({notes: notes_tmp});
        console.log("handleNote_Del notes", this.state.notes);
    }

    handleNote_Edit(value, index, isActive) {
        const notes_tmp = this.state.notes.slice();
        if (value != undefined && index != undefined) {
            notes_tmp[index].text = value;
        }
        if (isActive !== undefined && index != undefined)
            notes_tmp[index].isActive = isActive;

        console.log("handleNote_Del notes", this.state.notes);
        this.setState({notes: notes_tmp});
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
//
//     function hook_handleNote_Del(value) {
//         // console.log("NOTES.length:", notes.length);
//         // console.log("hook_handleNote_Del value:", value);
//         const notes_tmp = notes.filter((note, index) => {
//             return index !== value;
//         });
//         console.log("NOTES:", notes);
//         console.log("hook_handleNote_Del notes_tmp=", notes_tmp);
//         setNotes(notes_tmp);
//         // console.log("NOTES:", notes);
//     }
//
//
//
//     // function hook_handleNote_Edit(value, index) {
//     //     // TODO
//     //     console.log("hook_handleNote_Edit");
//     //     console.log("hook_handleNote_ADD", notes);
//     //     const notes_tmp = notes.slice();
//     //     notes_tmp[index].text = value;
//     //     setNotes(notes_tmp);
//     // }
//
//     const hook_Edit_callback = useCallback((value, index) => {
//         console.log("hook_handleNote_Edit");
//         console.log("hook_Edit_callback", notes);
//         debugger;
//         const notes_tmp = notes.slice();
//         //debugger;
//         notes_tmp[index].text = value;
//         setNotes(notes_tmp);
//     }, [notes]);
//
//     /**
//      * Работаем в функции на прямую ссылкой на notes
//      * @param value
//      */
//     // function hook_handleNote_ADD(value) {
//     //     console.log("hook_handleNote_ADD value:", value);
//     //     const notes_tmp = notes.slice();
//     //     notes_tmp.push(
//     //         { text: value, handler_del: hook_handleNote_Del, handler_edit: hook_handleNote_Edit }
//     //     );
//     //     setNotes(notes_tmp);
//     //     console.log("hook_handleNote_ADD", notes);
//     // }
//
//     const hook_add_callback = useCallback(value =>{
//             console.log("hook_handleNote_ADD value:", value);
//             console.log("hook_add_callback", notes);
//             //const notes_tmp = notes.slice();
//             notes.push(
//                 { text: value, handler_del: hook_handleNote_Del, handler_edit: hook_Edit_callback }
//             );
//             const notes_tmp = notes.slice();
//             //debugger;
//             setNotes(notes_tmp);
//             console.log("hook_add_callback ", notes);
//     }, [notes]);
//
//     // useEffect(() => {
//     //     // Обновляем заголовок документа с помощью API браузера
//     //     setNotes(notes);
//     // });
//
//     console.log("notes in Test:", notes)
//     return (
//         <div>
//             <h1>to do list</h1>
//             <AddNote transferData={hook_add_callback}/>
//             <List notes={notes}/>
//         </div>
//
//     );
// }

render(<Main />, document.getElementById('root'));
