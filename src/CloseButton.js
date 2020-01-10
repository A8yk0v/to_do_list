import React from 'react'
import List from "./list";

class CloseButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: 1};

        // Эта привязка обязательна для работы `this` в колбэке.
        //this.handleClick = this.handleClick.bind(this);
    }

    // const textet = <p>клик на кнопке с id={this.state.id}</p>

    handleClick() {
        alert('клик на кнопке с id=');
    }

    render() {
        return (
            <button onClick={this.props.handler_List}>{this.props.lable}</button>
        )
    }
}

export default CloseButton