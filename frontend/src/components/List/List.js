import React from 'react'
import Note from "../Note/Note";
import {Header, Table, Row as TableRow, Cell} from "@biocad/bcd-front-ui/layout/Table";
import Card from '@biocad/bcd-front-ui/layout/Card';

function List(props) {

    const style_table = {
        width: "300px",
        border: "2px solid black",
    };
    return  <div>
                <Table style={style_table} >
                    <Header children={"Таски на сегодня"}/>
                        <TableRow>
                            <Cell className="first_header_cell">
                                <div className="cell_container">
                                    {props.notes.map( (note, index) => {
                                        return <Note key={index}
                                                     id={index}
                                                     text={note.text}
                                                     isActive={note.isActive}
                                                     handler_del={props.handler_del}
                                                     handler_edit={props.handler_edit}/>
                                    })}
                                </div>
                            </Cell>
                        </TableRow>

                </Table>
            </div>
}

export default List