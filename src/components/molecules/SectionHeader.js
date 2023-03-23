import React from 'react'
import styled from 'styled-components'
import HashText from '../atoms/HashText'

const SectionHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  & .hashText {
    margin-right: 8px;
    .text {
      font-size: 2rem;
    }
  }
`;

const StyledHr = styled.hr`
  width: ${props => props.width};
  border: 0;
  border-bottom: 1px solid ${props => props.theme.palette.primary.main}
`

const StyledViewMore = styled.div`
  margin-left: auto;
  font-size: 1rem;
`

const SectionHeader = ({ heading, lineWidth = "0", path, ...rest }) => {
  return (
    <SectionHeaderWrap {...rest}>
      <HashText className="hashText" text={heading} />
      <StyledHr width={lineWidth} />
      {
        path &&
        <StyledViewMore className='view-more'>{`View all ~~>`}</StyledViewMore>
      }
    </SectionHeaderWrap>
  )
}

export default SectionHeader