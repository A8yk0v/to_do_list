import React, {useCallback, useState, useEffect} from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux';
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import Main from "./Main";

function notesReducer(state = [], action) {
    if (action.type == 'ADD_NOTE') {
        // const newState = state.concat(
        //         {text: action.value, isActive: true, handler_del: action.handleNote_Del, handler_edit: action.handleNote_Edit}
        //     );
        // return newState;
        return [
            ...state,
            {text: action.value, isActive: true, handler_del: action.handleNote_Del, handler_edit: action.handleNote_Edit}
        ]; // This is Spread syntax
    }
    if (action.type == 'DEL_NOTE') {
        const newState = state.filter((note, index) => {
            return index !== action.index;
        });
        return newState;
    }
    if (action.type == 'EDIT_NOTE') {
        const newState = state.slice();
        if (action.text != undefined && action.index != undefined) {
            newState[action.index].text = action.text;
        }
        if (action.isActive !== undefined && action.index != undefined)
            newState[action.index].isActive = action.isActive;
        return newState;
    }
    return state;
}

// Создание хранилища с передачей редьюсера
let store = createStore(notesReducer, composeWithDevTools());

render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('root')
);
