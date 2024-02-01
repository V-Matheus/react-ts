import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
  label: string,
}

const Input = ({label, ...props}: InputProps) => {

  return (
    <div style={{marginBottom: '1rem'}}>
      <label htmlFor={label}>{label}</label>
      <input type="text" name={label} id={label} {...props} />
    </div>
  )
}

export default Input