import React from 'react'
import Note from "../Note/Note";

function List(props) {
    return  <div>
                <ul>{props.notes.map( (note, index) => {
                    return <Note key={index}
                                 id={index}
                                 text={note.text}
                                 isActive={note.isActive}
                                 handler_del={note.handler_del}
                                 handler_edit={note.handler_edit}/>
                })}</ul>
            </div>
}

export default List