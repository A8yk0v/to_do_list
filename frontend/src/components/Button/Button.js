import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={() => {this.props.handler(this.props.id)}}>{this.props.lable}</button>
        )
    }
}

export default Button