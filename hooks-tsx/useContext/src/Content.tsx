import React from 'react'
import { useUser } from './useContext'

const Content = () => {

  const {data, loading} = useUser()

  if(loading) return <div>Carregando...</div>
  if(!data) return null
  return (
    <div>
      <h3>Preferências</h3>
      <p>Qualidade: {data.preferencias.qualidade}</p>
      <p>PlayBack: {data.preferencias.playback}</p>
      <p>Volume: {data.preferencias.volume}</p>
    </div>
  ) 
}

export default Content