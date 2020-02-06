import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import AddField from "./components/AddField/AddField";
import Screen from "@biocad/bcd-front-ui/layout/Screen";

import RadioGroup from '@biocad/bcd-front-ui/controls/RadioGroup';
import {faStickyNote} from '@fortawesome/free-solid-svg-icons/faStickyNote';
import {faListAlt} from '@fortawesome/free-solid-svg-icons/faListAlt';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {InitialState, RootDispatcher, viewModeType} from "./index";
import StickersConteiner from "./components/stickersContainer/StickersContainer";
import TableContainer from "./components/List/TableContainer";

interface Props {
}

interface StateProps {
    state: {title: string, text: string, isActive: boolean}[];
    viewMode: viewModeType;
}

const Main: React.FC<Props> = () => {

    const state: StateProps = useSelector<InitialState, StateProps>((state: InitialState) => {
        return {
            state: state.notes,
            viewMode: state.viewMode,
        }
    });

    const dispatch = useDispatch();
    const rootDispatcher = new RootDispatcher(dispatch);

    function handleNote_ADD(title: string, text: string): void {
        rootDispatcher.addNote(title, text);
    }

    function handleNote_Del(index: number): void {
        rootDispatcher.delNote(index);
    }

    function handleNote_Edit(title: string, text: string, index: number, isActive: boolean): void {
        rootDispatcher.editNote(title, text, index, isActive);
    }

    const h2_style = {
        marginLeft: "auto",
        marginRight: "auto",
    };

    const Logo = () => <div style={{fontSize:'24px'}}>📝</div>;

    const divStyle = {
        // Контент во весь экран
        height: "100vh",
    };

    const screenContentStyle = {
        margin: "10px",
        //display: "inline-block",
    };

    const ObjOptions =  [
        {value: 'stickers', label:<FontAwesomeIcon icon={faStickyNote}/>},
        {value: 'table', label:<FontAwesomeIcon icon={faListAlt}/>}
    ];

    return  <div style={divStyle}>
        <HashRouter>
            <Screen>
                <Screen.Header Logo={Logo} version="v0.1">
                    <RadioGroup
                        name     = "group-view"
                        view     = "icon"
                        options  = { ObjOptions }
                        defaultValue    = { ObjOptions[0] }
                        onChange = { () => rootDispatcher.switchViewMode() }
                    />
                </Screen.Header>
                <Screen.SidebarLayout>
                    <Screen.Sidebar collapsible>
                        <h2 style={h2_style}>To do list</h2>
                        <AddField transferData={handleNote_ADD}/>
                    </Screen.Sidebar>
                    <Screen.Content>
                        { state.viewMode == viewModeType.STICKER_MODE &&
                            <StickersConteiner notes={state.state}
                                               handler_del={handleNote_Del}
                                               handler_edit={handleNote_Edit}/>
                        }
                        { state.viewMode == viewModeType.TABLE_MODE &&
                            <Screen.Panel>
                                <TableContainer notes={state.state}
                                                handler_del={handleNote_Del}
                                                handler_edit={handleNote_Edit}/>
                            </Screen.Panel>
                        }
                    </Screen.Content>
                </Screen.SidebarLayout>
            </Screen>
        </HashRouter>
    </div>
};

export default Main;
