import React from 'react'

class AddField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "New .."
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.transferData(this.state.value);
        this.state.value = "New ..";
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Add:
                    <textarea value={this.state.value}
                              onChange={(event) =>
                                  this.setState({value: event.target.value})}
                              rows="1">
                    </textarea>
                    <input type="submit" value="Отправить" />
                </p>
            </form>
        )
    }
}

export default AddField