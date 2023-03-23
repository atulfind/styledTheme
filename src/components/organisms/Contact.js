import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../molecules/SectionHeader';

const ContactWrap = styled.div`
  margin-top: 70px;
`;

const Content = styled.div`
  margin-top: 32px;
`;

const ContentLeft = styled.div`
  width: 50%;
`;

const Contact = () => {
  return (
    <ContactWrap id="contacts">
      <SectionHeader heading="contacts" lineWidth='10%' />
      <Content>
        <ContentLeft>
          <div>
            I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
          </div>
        </ContentLeft>
      </Content>
    </ContactWrap>
  )
}

export default Contact