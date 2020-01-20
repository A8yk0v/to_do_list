import React from 'react'

function Button(props) {



    return <button onClick={() => {props.handler(props.id)}}> {props.lable} </button>
}

export default Button