import React from "react";
import useFetch from "./useFetch";


type User = {
  id: number,
  nome: string,
  idade: number,
  aulas: number,
  cursos: number,
  preferencias: {
    playback: number,
    volume: number
    qualidade: 'baixa' | 'media' | 'alta'
  }
}

type IUserContext = {
  data: User | null,
  loading: boolean,
}

const USerContext = React.createContext<IUserContext | null>(null)

export const useUser = () => {
  const context = React.useContext(USerContext)
  if(context === null) throw new Error('Use Context deve estar dentro do Provider')
  return context
}

export const UserContextProvider = ({children}: React.PropsWithChildren) => {

  const {data, loading, error} = useFetch<User>('https://data.origamid.dev/usuarios/1')

  return (
  <USerContext.Provider value={{data, loading}}>
    {children}
  </USerContext.Provider>)
}