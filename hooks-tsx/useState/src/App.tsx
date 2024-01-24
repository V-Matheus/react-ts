import React from "react"
import Input from "./Input"

type Venda = {
  id: string,
  nome: string,
  preco: number,
  status: string,
}

function App() {

  const [inicio,setInicio] = React.useState('')
  const [final,setFinal] = React.useState('')
  const [data,setData] = React.useState<null | Venda[]>(null)

  React.useEffect(() => {
   if(inicio !== '' && final !== '') {
    fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`).then(r => r.json()).then(json => setData(json as Venda[])).catch(error => console.log(error))
   }
  }, [inicio, final])

  return (
    <div>
      <div>
       <Input label="Início" id="inicio" type="date" value={inicio} setState={setInicio}/>
       <Input label="Final" id="final" type="date" value={final} setState={setFinal}/>
      </div>
      <div>
        {data !== null && data.map(venda => <li key={venda.id}>{venda.nome}: {venda.status}</li>)}
      </div>
    </div>
  )
}

export default App
