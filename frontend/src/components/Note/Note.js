import React, {useState} from 'react'
import Button from "../Button/Button";

function Note(props) {
    const [isEdit, setIsEdit]       = useState(false);
    const [editValue, setEditValue] = useState(props.text);

    // Зачеркнутый текст
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    };
    // Компоненты в ряд
    const container = {
        display: "flex",
        flexDirection: "row",

        minHeight: "100%",
    };

    const arg = {
        // cursor: "pointer",
        position: "relative",
        float: "right",
        // padding: "12px 8px 12px 40px",
        // background: "#eee",
        // fontSize: "18px",
    };

    return  <div>
                <div style={container}>
                    <li style={props.isActive ? arg : completedStyle}
                        onClick={() => {
                            props.handler_edit(undefined, props.id, !props.isActive);
                        }} >
                        {props.text}
                    </li>
                    <Button id={props.id} lable="X" handler={props.handler_del}/>
                    <Button id={props.id} lable="Edit" handler={()=>{setIsEdit(!isEdit)}}/>
                </div>
                {isEdit == true &&
                <div>
                    <textarea rows="1" value={editValue} onChange={(event) => {
                        setEditValue(event.target.value);
                    }}/>
                    <Button id={props.id} lable="N" handler={()=>{
                        setIsEdit(false);
                    }}/>
                    <Button id={props.id} lable="Y" handler={(value)=>{
                        setIsEdit(false);
                        props.handler_edit(editValue, props.id, undefined);
                    }}/>
                </div>}
            </div>
}

export default Note