import React from 'react'
import styled from 'styled-components'

const BorderedWrap = styled.div`
  padding: 10px;
  border: 1px solid ${props => props.theme.palette.color.default};
  background: ${props => props.theme.palette.background.default};
`

const Bordered = ({children, ...rest}) => {

  return (
    <BorderedWrap {...rest}>{children}</BorderedWrap>
  )
}

export default Bordered