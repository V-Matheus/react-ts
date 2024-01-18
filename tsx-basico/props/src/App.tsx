import React from "react"
import Input from "./Input"

function App() {

  const [data, setData] = React.useState('')

  return (
    <div>
      <p>Início da Viagem: {data}</p>
      <Input id="email" label="Email"/>
      <Input id="nome" label="Nome"/>
      <Input value={data} onChange={(event) => setData(event.currentTarget.value)} id="inicio" label="Início da Viagem" type="date"/>
      <Input id="horario" label="Horário" type="time"/>
    </div>
  )
}

export default App
