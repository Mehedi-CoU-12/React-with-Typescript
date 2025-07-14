import React from 'react'

type PersonType={
    name:{
        first:string,
        last:string
    }
}

function Person(props:PersonType) {
  return (
    <div>
        <p>first name: <span>{props.name.first} </span></p>
        <p>Last name: <span>{props.name.last}</span></p>
    </div>
  )
}

export default Person