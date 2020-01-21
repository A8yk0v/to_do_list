import React from 'react'
import Note from "../Note/Note";

function List(props) {

    return  <div>
                <ul>{props.notes.map( (note, index) => {
                    return <Note key={index}
                                 id={index}
                                 text={note.text}
                                 isActive={note.isActive}
                                 handler_del={props.handler_del}
                                 handler_edit={props.handler_edit}/>
                })}</ul>
            </div>
}

export default List