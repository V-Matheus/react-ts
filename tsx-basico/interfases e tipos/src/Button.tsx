import React from 'react'

const Button = ({children}: React.PropsWithChildren) => {

  const handleClick: React.MouseEventHandler = (event) => {
    console.log(event.pageX);
  }

  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default Button