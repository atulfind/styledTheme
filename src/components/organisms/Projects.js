import React from 'react'
import styled from 'styled-components'
import Project from '../molecules/Project';
import SectionHeader from '../molecules/SectionHeader';

const ProjectsWrap = styled.div`
  margin-top: 70px;
  & .section-project {
    margin-bottom: 32px;
  }
`;

const ProjectItems = styled.div`
  display: flex;
  gap: 1rem;
`;

const Projects = () => {
  return (
    <ProjectsWrap>
      <SectionHeader lineWidth='40%' className="section-project" heading="projects" path="/projects" />
      <ProjectItems>
        <Project />
        <Project />
        <Project />
        <Project />
      </ProjectItems>
    </ProjectsWrap>
  )
}

export default Projects