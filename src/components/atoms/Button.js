import React from 'react'
import styled from 'styled-components';

const StyledButtonn = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  background: transparent;
  color: ${props => props.theme.palette.color.default};
  border: 1px solid #C778DD;
`;

const Button = ({children, ...rest}) => {
  return (
    <StyledButtonn {...rest}>{children}</StyledButtonn>
  )
}

export default Button