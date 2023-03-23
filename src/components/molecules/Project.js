import React from 'react'
import styled from 'styled-components'
import { projectBanner } from '../../assets/images';
import TechStack from './TechStack';

const ProjectWrap = styled.div`
  width: 25%;
`;

const ProjectImageWrap = styled.div`
  width: 100%;
  & img {
    width: 100%;
  }
`;

const Project = () => {
  return (
    <ProjectWrap>
      <ProjectImageWrap>
        <img src={projectBanner} alt="project"/>
      </ProjectImageWrap>
      <TechStack />
    </ProjectWrap>
  )
}

export default Project