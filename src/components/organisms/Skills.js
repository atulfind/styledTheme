import React from 'react'
import styled from 'styled-components'
import { skill } from '../../assets/images';
import SectionHeader from '../molecules/SectionHeader'
import Skill from '../molecules/Skill';

const SkillsWrap = styled.div`
  margin-top: 106px;
  & .section-skills {
    margin-bottom: 32px;
  }
`;

const SkillContent = styled.div`
  display: flex;
  gap: 60px;
`;

const LeftSkill = styled.div`
  display: flex;
  width: 30%;
`;

const RightSkill = styled.div`
  width: 70%;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const Skills = () => {
  return (
    <SkillsWrap>
      <SectionHeader lineWidth='20%' className="section-skills" heading="skills" />
      <SkillContent>
        <LeftSkill>
          <img src={skill} alt='' />
        </LeftSkill>
        <RightSkill>
          <Skill title="Programming" style={{gridColumnStart: '1'}} />
          <Skill title="Tools" style={{gridColumnStart: '2'}} />
          <Skill title="Language" style={{gridColumnStart: '3'}} />
          <Skill title="Hello" style={{gridColumnStart: '2'}}/>
          <Skill title="Hello" style={{gridColumnStart: '3'}}/>
        </RightSkill>
      </SkillContent>
    </SkillsWrap>
  )
}

export default Skills