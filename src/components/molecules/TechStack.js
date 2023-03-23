import React from 'react'
import styled from 'styled-components';

const TechStackWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4px 0;
  border: 1px solid ${props => props.theme.palette.color.default};
  & .item {
    padding: 4px 8px;
  }
`;

const TechStack = () => {
  return (
    <TechStackWrap>
      <div className='item'>HTML</div>
      <div className='item'>SCSS</div>
      <div className='item'>Python</div>
      <div className='item'>Flask</div>
      <div className='item'>Python</div>
      <div className='item'>Flask</div>
      <div className='item'>Flask</div>
      <div className='item'>Python</div>
      <div className='item'>Flask</div>
      <div className='item'>Flask</div>
      <div className='item'>Python</div>
      <div className='item'>Flask</div>
    </TechStackWrap>
  )
}

export default TechStack