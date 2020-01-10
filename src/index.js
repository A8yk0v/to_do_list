import React from 'react'
import {render} from 'react-dom'
import List from "./list";
import AddField from "./Add_field";

function Main() {
    return (
        <div>
            <h1>to do list</h1>
            <List/>
            <AddField/>
        </div>
        )
}

render(<Main />, document.getElementById('root'));
