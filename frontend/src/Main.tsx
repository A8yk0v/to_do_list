import * as React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AddField from "./components/AddField/AddField";

import List from "./components/List/List";
import Screen from "@biocad/bcd-front-ui/layout/Screen";
import {Header} from "@biocad/bcd-front-ui/layout/Table";

import {InitialState, RootDispatcher} from "./index";

interface Props {
}

interface StateProps {
    state: {text: string, isActive: boolean}[];
}

const Main: React.FC<Props> = () => {

    const state: StateProps = useSelector<InitialState, StateProps>((state: InitialState) => {
        return {
            state: state.notes,
        }
    });

    const dispatch = useDispatch();
    const rootDispatcher = new RootDispatcher(dispatch);

    function handleNote_ADD(text: string): void {
        // props.onAddNote(value);
        debugger;
        rootDispatcher.addNote(text);
    }

    function handleNote_Del(index: number): void {
        // props.onDelNote(value);
        debugger;
        rootDispatcher.delNote(index);
    }

    function handleNote_Edit(text: string, index: number, isActive: boolean): void {
        // props.onEditNote(text, index, isActive);
        debugger;
        rootDispatcher.editNote(text, index, isActive);
    }

    const h2_style = {
        marginLeft: "auto",
        marginRight: "auto",
    };

    const Sidebar_style = {
        height: "100%",
    };

    const Logo = () => <div style={{fontSize:'24px'}}>📝</div>;

    return  <div>
        <HashRouter>
            <Screen>
                <Screen.Header Logo={Logo} version="v0.1"/>
                <Screen.SidebarLayout>
                    <Screen.Sidebar collapsible>
                        <h2 style={h2_style}>To do list</h2>
                        <AddField transferData={handleNote_ADD}/>
                    </Screen.Sidebar>
                    <Screen.Content>
                        <Screen.Panel>
                            <List notes={state.state}
                                  handler_del={handleNote_Del}
                                  handler_edit={handleNote_Edit}/>
                        </Screen.Panel>
                    </Screen.Content>
                </Screen.SidebarLayout>
            </Screen>
        </HashRouter>
    </div>
};

export default Main;
