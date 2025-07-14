import React from 'react'

type OscarType={
    children:React.ReactNode
}

function Oscar(props:OscarType) {

  return (
    <div>
        {props.children}
    </div>
  )
}

export default Oscar