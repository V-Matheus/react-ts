import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
  label: string,
  id: string,
  setState: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({label,setState , id, ...props}: InputProps) => {

  return (
    <div style={{marginBottom: '1rem'}}>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} onChange={({currentTarget}) => setState(currentTarget.value)} id={id} {...props} />
    </div>
  )
}

export default Input