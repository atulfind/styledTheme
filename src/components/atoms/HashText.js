import React from 'react'
import styled from 'styled-components'

const HashTextWrap = styled.div`
  display: flex;
  align-items: center;
  & .text {
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.theme.palette.color.default}
  }
  & .hash {
    color: ${props => props.theme.palette.primary.main};
  }
`;

const HashText = ({text, prefix="#", ...rest}) => {
  return (
    <HashTextWrap {...rest}>
      <span className='text hash'>{prefix}</span>
      <span className='text'>{text}</span>
    </HashTextWrap>
  )
}

export default HashText