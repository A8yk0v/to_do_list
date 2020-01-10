import React from 'react'
import CloseButton from "./CloseButton";

class List extends React.Component{

    handleClick_List() {
        alert('клик на List');
    }

    render() {
        return (
            <ul type="circle">
                <li>Hit the gym <CloseButton lable="Close" handler_List={this.handleClick_List}/></li>
                <li className="checked">Pay bills <CloseButton lable="Close"/></li>
                <li>Meet George <CloseButton lable="Close"/></li>
                <li>Buy eggs <CloseButton lable="Close"/></li>
                <li>Read a book <CloseButton lable="Close"/></li>
                <li>Organize office <CloseButton lable="Close"/></li>
            </ul>
        )
    }
}

export default List