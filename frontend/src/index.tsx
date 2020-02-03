import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, Action, Reducer, Dispatch} from 'redux';
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import Main from "./Main";

export interface InitialState {
    notes: {text: string; isActive: boolean}[];
}

export const initialState: InitialState = {
    notes: new Array(0),
};

initialState.notes.push({text: "TMP", isActive: true});
initialState.notes.push({text: "Bla bla:\n1. Good Morning!\n2. Go!!!", isActive: true});

export interface IAction {
    value: string,
    index: number,
    isActive: boolean,
}

export interface DispatchAction extends Action {
    payload: Partial<IAction>;
}

export enum ActionType {
    ADD_NOTE,
    DEL_NOTE,
    EDIT_NOTE,
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (state = initialState, action) => {

    if (action.type === ActionType.ADD_NOTE) {
        const NewState: InitialState = {
            notes: [ ...state.notes, {text: action.payload.value, isActive: true} ],
        };
        return NewState;
    }
    if (action.type === ActionType.DEL_NOTE) {
        const newNotes = state.notes.filter((note, index) => {
            return index !== action.payload.index;
        });
        const newState: InitialState = {
            notes: newNotes,
        };
        return newState;
    }
    if (action.type === ActionType.EDIT_NOTE) {
        const newNotes = state.notes.slice();
        const newState: InitialState = {
            notes: newNotes,
        };
        if (action.payload.value != undefined && action.payload.index != undefined) {
            newNotes[action.payload.index].text = action.payload.value;
            newState.notes = newNotes;
        }
        if (action.payload.isActive !== undefined && action.payload.index != undefined) {
            newNotes[action.payload.index].isActive = action.payload.isActive;
            newState.notes = newNotes;
        }
        return newState;
    }

    return state;
};

export class RootDispatcher {

    private readonly dispatch: Dispatch<DispatchAction>;

    constructor(dispatch: Dispatch<DispatchAction>){
        this.dispatch = dispatch;
    }

    addNote = (value: string) => this.dispatch({type: ActionType.ADD_NOTE, payload: {value}});

    delNote = (index: number) => this.dispatch({type: ActionType.DEL_NOTE, payload: {undefined, index}});

    editNote = (value: string, index: number, isActive: boolean) => this.dispatch({type: ActionType.EDIT_NOTE, payload: {value, index, isActive}});
}

// rootReducer.ts
export const store = createStore<InitialState, DispatchAction, null, null>(rootReducer);

// ---------------------------------------------------------------------

// console.log("notesReducer");
//
// function notesReducer(state = [], action) {
//
//     if (action.type == 'ADD_NOTE') {
//         // const newState = state.concat(
//         //         {text: action.value, isActive: true, handler_del: action.handleNote_Del, handler_edit: action.handleNote_Edit}
//         //     );
//         // return newState;
//         return [
//             ...state,
//             {text: action.value, isActive: true}
//         ]; // This is Spread syntax
//     }
//     if (action.type == 'DEL_NOTE') {
//         const newState = state.filter((note, index) => {
//             return index !== action.index;
//         });
//         return newState;
//     }
//     if (action.type == 'EDIT_NOTE') {
//         const newState = state.slice();
//         if (action.text != undefined && action.index != undefined) {
//             newState[action.index].text = action.text;
//         }
//         if (action.isActive !== undefined && action.index != undefined)
//             newState[action.index].isActive = action.isActive;
//         return newState;
//     }
//     return state;
// }
//
// // Создание хранилища с передачей редьюсера
// let store = createStore(notesReducer, composeWithDevTools());

// index.tsx
ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('root')
);
