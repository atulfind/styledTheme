import React from 'react'
import styled, { useTheme } from 'styled-components'
import { IconQuote } from '../../assets/icons';
import Bordered from '../atoms/Bordered';

const StyledQuote = styled.div`
  width: fit-content;
  margin: 112px auto 0 auto;
  & .main-qoute {
    padding: 32px;
    position: relative;
    & .quote {
      background: ${props => props.theme.palette.background.default};
      position: absolute;
      left: 16px;
      top: -10px;
      padding: 0px 8px;
      & svg {
        width: 16px;
      }
    }
    & .qoute-after{
      bottom: -15px;
      left: unset;
      right: 16px;
      top: unset;
    }

  }
  & .sub-qoute {
    width: fit-content;
    margin-top: -1px;
    margin-left: auto;
    padding: 16px;
  }
`;

const Quote = () => {
  const { palette } = useTheme();

  return (
    <StyledQuote>
      <Bordered className="main-qoute">
        <div className="quote">
          <IconQuote fill={palette.color.default} />
        </div>
        With great power comes great electricity bill
         <div className="quote qoute-after">
          <IconQuote fill={palette.color.default} />
        </div>
      </Bordered>
      <Bordered className="sub-qoute">
        - Dr. Who
      </Bordered>
    </StyledQuote>
  )
}

export default Quote