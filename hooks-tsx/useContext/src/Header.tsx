import React from 'react'
import { useUi } from './UiContext'

const Header = () => {

  const {setDark} = useUi()
  
  return (
    <button onClick={() => setDark((b) => !b)}>Mode</button>
  )
}

export default Header