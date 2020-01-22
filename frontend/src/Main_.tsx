import React from 'react';
import { connect } from 'react-redux';
import AddField from "./components/AddField/AddField";
import List from "./components/List/List";

function Main(props) {

    function handleNote_ADD(value: string): void {
        props.onAddNote(value);
    }

    function handleNote_Del(value: string): void {
        props.onDelNote(value);
    }

    function handleNote_Edit(value: string, index: number, isActive: boolean): void {
        props.onEditNote(value, index, isActive);
    }

    return  <div>
        <h1>to do list</h1>
        <AddField transferData={handleNote_ADD}/>
        <List notes={props.store}
              handler_del={handleNote_Del}
              handler_edit={handleNote_Edit}/>
    </div>
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onAddNote: (value) => {
            dispatch({
                type: 'ADD_NOTE',
                value: value
            });
        },
        onDelNote: (value) => {
            dispatch({
                type: 'DEL_NOTE',
                index: value
            });
        },
        onEditNote: (value, index, isActive) => {
            dispatch({
                type: 'EDIT_NOTE',
                text: value,
                index: index,
                isActive: isActive
            });
        }
    })
)(Main);