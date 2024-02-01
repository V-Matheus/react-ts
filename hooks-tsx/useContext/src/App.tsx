import React from "react"
import Header from "./Header"
import Content from "./Content"
import { UserContextProvider } from "./useContext"

function App() {
  return (
    <UserContextProvider>
      <Header/>
      <Content/>
    </UserContextProvider>

  )
}

export default App
