import React from 'react'

type ButtonProps2 = React.PropsWithChildren<{
  tamanho?: string
  onClick?: () => void
}>

type ButtonProps = React.ComponentProps<'button'> & {
  tamanho?: string
}

const Button = ({tamanho, children, ...props}: ButtonProps) => {
  return (
    <button style={{fontSize: tamanho}} {...props}>
      {children}
    </button>
  )
}

export default Button