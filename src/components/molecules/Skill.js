import React from 'react'
import styled from 'styled-components'
import Bordered from '../atoms/Bordered';
import TechStack from './TechStack';

const SkillWrap = styled.div`
  width: 100%;
`;

const Skill = ({title, ...rest}) => {

  return (
    <SkillWrap {...rest}>
      <Bordered>{title}</Bordered>
      <TechStack />
    </SkillWrap>
  )
}

export default Skill