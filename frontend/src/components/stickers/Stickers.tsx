import * as React from 'react'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons/faWindowClose';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons/faSyncAlt';
import { faCheck } from '@fortawesome/free-solid-svg-icons/facheck';
import Card from '@biocad/bcd-front-ui/layout/Card';

import Textarea from '@biocad/bcd-front-ui/controls/Textarea';
import Button from "@biocad/bcd-front-ui/controls/Button";

import './Stickers.css';

interface IProps {
    key: number,
    id: number,
    title: string,
    text: string,
    isActive: boolean,
    handler_del: (index: number) => void,
    handler_edit: (title: string, value: string, index: number, isActive: boolean) => void
}

const Stickers: React.FC<IProps> = (props) => {
    const [isEdit, setIsEdit]       = React.useState(false);
    const [editValue, setEditValue] = React.useState(props.text);
    const [isFocus, setIsFocus]     = React.useState(false);

    // Зачеркнутый текст
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through",
        cursor: "pointer",
    };

    const arg = {
        position: "relative",
        float: "right",
        cursor: "pointer",
    };
    const button_style = {
        textAlign: "center",
    };
    const edit_textarea = {
        width: "50%",
        lineHeight: "1",
    };

    return <Card className="cardStyle" title={props.title} onClick={()=>{
        setIsFocus(true);
    }}>
        {!isEdit && <div style={{display: "flex", flexDirection: "column"}}>
            <pre style={props.isActive ? arg : completedStyle}>{props.text}</pre>
            <span className="control">
                <Button pressed={true} icon={faCheck} size="L" onAction={() => {
                    props.handler_edit(undefined, undefined, props.id, !props.isActive);
                }}/>
                <Button icon={faPencilAlt} size="L" onAction={() => {
                    setIsEdit(!isEdit)
                }}/>
                <Button style={button_style} icon={faTrashAlt} size="L" onAction={() => {
                    props.handler_del(props.id);
                }}/>
            </span>
        </div>
        }
        {isEdit && <div>
            <Button icon={faWindowClose} size="L" onAction={() => {
                setIsEdit(false);
            }}/>
        </div>}
        </Card>

    // return  <div>
    //     <div style={container}>
    //                 <pre style={props.isActive ? arg : completedStyle}
    //                      onClick={() => {
    //                          props.handler_edit(undefined, props.id, !props.isActive);
    //                      }} >
    //                     {props.text}
    //                 </pre>
    //         <Button pressed={true} icon={faCheck} size="L" onAction={()=>{
    //             props.handler_edit(undefined, props.id, !props.isActive);
    //         }}/>
    //         <Button icon={faPencilAlt} size="L" onAction={()=>{setIsEdit(!isEdit)}}/>
    //         <Button style={button_style} icon={faTrashAlt} size="L" onAction={() => {
    //             props.handler_del(props.id);
    //         }}/>
    //     </div>
    //     {isEdit == true &&
    //     <div>
    //         <Textarea style={edit_textarea} row="1" value={editValue}
    //                   onChange={(event) => {
    //                       setEditValue(event.target.value);
    //                   }}/>
    //         <Button icon={faWindowClose} size="L" onAction={() => {
    //             setIsEdit(false);
    //         }}/>
    //         <Button icon={faSyncAlt} size="L" onAction={()=>{
    //             setIsEdit(false);
    //             props.handler_edit(editValue, props.id, undefined);
    //         }}/>
    //
    //     </div>}
    // </div>
}

export default Stickers