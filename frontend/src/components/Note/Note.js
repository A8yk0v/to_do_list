import React from 'react'
import Button from "../Button/Button";
import AddField from "../Add_note/AddNote";

class Note extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
            isEdit: false,
            editValue: this.props.text,
            tmp_editValue: this.props.text
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClick_Edit = this.handleClick_Edit.bind(this);
        this.handleClick_Edit_Close = this.handleClick_Edit_Close.bind(this);
        this.handleClick_Edit_OK = this.handleClick_Edit_OK.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.setState({isActive: !this.state.isActive});
    }

    handleClick_Edit(value) {
        this.setState({isEdit: true});
    }

    handleClick_Edit_Close(value) {
        this.setState({isEdit: false})
    }

    handleClick_Edit_OK(value) {
        this.setState({editValue: this.state.tmp_editValue})
        this.setState({isEdit: false})
        this.props.handler_edit(value, this.props.id);
    }

    handleChange(event) {
        this.setState({tmp_editValue: event.target.value});
    }

    render() {
        // Зачеркнутый текст
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }

        // Компоненты в ряд
        const container = {
            display: "flex",
            flexDirection: "row"
        }

        const arg = {
            // cursor: "pointer",
            position: "relative",
            float: "right",
            // padding: "12px 8px 12px 40px",
            // background: "#eee",
            // fontSize: "18px",
        }

        return (
            <div>
                <div style={container}>
                    <li style={this.state.isActive ? arg : completedStyle} onClick={this.handleClick} >
                        {this.state.editValue}
                    </li>
                    <Button id={this.props.id} lable="X" handler={this.props.handler_del}/>
                    <Button id={this.props.id} lable="Edit" handler={this.handleClick_Edit}/>
                </div>
                {this.state.isEdit == true &&
                <div>
                    <textarea rows="1" onChange={this.handleChange}>{this.state.editValue}</textarea>
                    <Button id={this.props.id} lable="N" handler={this.handleClick_Edit_Close}/>
                    <Button id={this.props.id} lable="Y" handler={this.handleClick_Edit_OK}/>
                </div>}
            </div>

        )
    }
}

export default Note