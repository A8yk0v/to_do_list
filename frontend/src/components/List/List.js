import React from 'react'

class List extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>{this.props.notes}</ul>
            </div>
        )
    }
}

export default List