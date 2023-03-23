import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button';
import SectionHeader from '../molecules/SectionHeader';

const AboutWrap = styled.div`
  margin-top: 70px;
  & .section-about {
    margin-bottom: 32px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  gap: 40px;
`;

const LeftAbout = styled.div`
    width: 50%;
    & .content-item {
      margin-bottom: 32px;
    }
`;

const About = () => {
  return (
    <AboutWrap>
      <SectionHeader className="section-about" heading="about-me" lineWidth='20%'/>
      <AboutContent>
        <LeftAbout>
          <div className='content-item'>Hello, i’m Elias!</div>
          <div className='content-item'>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </div>
          <div className='content-item'>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks. </div>
          <Button>{`Read more ->`}</Button>
        </LeftAbout>
      </AboutContent>
    </AboutWrap>
  )
}

export default About