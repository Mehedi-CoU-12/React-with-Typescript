import React from 'react'

type GreetType={
    name:string,
    messageCount:number
}


function Greet(props:GreetType) {
  return (
    <div>
        <h2>Welcome {props.name}! You have {props.messageCount} unread message!</h2>
    </div>
  )
}

export default Greet