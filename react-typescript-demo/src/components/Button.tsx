import React from 'react'

type ButtonProps={
    handleClick:(e:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}

function Button(props:ButtonProps) {
  return (
    <button onClick={(e)=>props.handleClick(e,1)} > Click Me! </button>
  )
}

export default Button