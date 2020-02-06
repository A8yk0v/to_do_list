import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, Action, Reducer, Dispatch} from 'redux';
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import Main from "./Main";

export enum viewModeType {
    STICKER_MODE,
    TABLE_MODE,
}

export interface InitialState {
    notes: {title: string, text: string; isActive: boolean}[];
    viewMode: viewModeType;
}

export interface IntialStateArray {
    [index: number] : {text: string; isActive: boolean};
}

let tmp: IntialStateArray = [{text: "TMP", isActive: false}, {text: "Bla bla:\n1. Good Morning!\n2. Go!!!", isActive: true}];
console.log("tmp:", tmp);
console.log("tmp[1]:", tmp[1]);

export const initialState: InitialState = {
    notes: new Array(0),
    viewMode: viewModeType.STICKER_MODE,
};

// export const initialState: IntialStateArray = new Array(0);

initialState.notes.push({title: "Empty", text: "TMP", isActive: false});
initialState.notes.push({title: "Empty", text: "Bla bla:\n1. Good Morning!\n2. Go!!!", isActive: true});
initialState.notes.push({title: "Empty", text: "Bla bla2:\n1. Good Morning!\n2. Go!!!", isActive: true});
initialState.notes.push({title: "Empty", text: "Bla bla3:\n1. Good Morning!\n2. Go!!!", isActive: true});
initialState.notes.push({title: "Empty", text: "Bla bla4:\n1. Good Morning!\n2. Go!!!", isActive: true});
initialState.notes.push({title: "Empty", text: "Bla bla5:\n1. Good Morning!\n2. Go!!!", isActive: true});
initialState.notes.push({title: "Empty", text: "Bla bla6:\n1. Good Morning!\n2. Go!!!", isActive: true});
initialState.notes.push({title: "Empty", text: "Bla bla7:\n1. \nG\no\no\nd\n \nMorning!\n2. Go!!!", isActive: true});
initialState.notes.push({title: "Empty", text: "Bla bla8:\n1. Good Morning!\n2. Go!!!", isActive: true});
initialState.notes.push({title: "Empty", text: "Bla bla9:\n1. Good Morning!\n2. Go!!!", isActive: true});
initialState.notes.push({title: "Empty", text: "Bla bla10:\n1. Good Morning!\n2. Go!!!", isActive: true});
initialState.notes.push({title: "Empty", text: "Bla bla11:\n1. \nG\no\no\nd\n \nMorning!\n2. Go!!!", isActive: true});

export interface IAction {
    title: string,
    text: string,
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
    SWITCH_VIEW_MODE
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (state = initialState, action) => {

    if (action.type === ActionType.ADD_NOTE) {
        const NewState: InitialState = {
            //notes: [ ...state.notes, {title: action.payload.titel, text: action.payload.text, isActive: true} ],
            notes: state.notes
        };
        NewState.notes.push({title: action.payload.title, text: action.payload.text, isActive: true});
        return NewState;
    }
    if (action.type === ActionType.DEL_NOTE) {
        const newNotes = state.notes.filter((note, index) => {
            return index !== action.payload.index;
        });
        const newState: InitialState = {
            notes: newNotes,
            viewMode: state.viewMode,
        };
        return newState;
    }
    if (action.type === ActionType.EDIT_NOTE) {
        const newNotes = state.notes.slice();
        const newState: InitialState = {
            notes: newNotes,
            viewMode: state.viewMode,
        };
        if (action.payload.text != undefined && action.payload.index != undefined) {
            newNotes[action.payload.index].text = action.payload.text;
            newState.notes = newNotes;
        }
        if (action.payload.isActive !== undefined && action.payload.index != undefined) {
            newNotes[action.payload.index].isActive = action.payload.isActive;
            newState.notes = newNotes;
        }
        return newState;
    }

    if (action.type === ActionType.SWITCH_VIEW_MODE) {
        const newState: InitialState = {
            notes: state.notes.slice(),
            viewMode: state.viewMode == viewModeType.STICKER_MODE ? viewModeType.TABLE_MODE : viewModeType.STICKER_MODE,
        };
        return newState;
    }

    return state;
};

export class RootDispatcher {

    private readonly dispatch: Dispatch<DispatchAction>;

    constructor(dispatch: Dispatch<DispatchAction>){
        this.dispatch = dispatch;
    }

    switchViewMode = () => this.dispatch({type: ActionType.SWITCH_VIEW_MODE, payload: undefined});

    addNote = (title: string, text: string) => this.dispatch({type: ActionType.ADD_NOTE, payload: {title, text}});

    delNote = (index: number) => this.dispatch({type: ActionType.DEL_NOTE, payload: {undefined, undefined, index}});

    editNote = (title: string, text: string, index: number, isActive: boolean) => this.dispatch({type: ActionType.EDIT_NOTE, payload: {title, text, index, isActive}});
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
