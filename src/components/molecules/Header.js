import React from 'react'
import styled, { useTheme } from 'styled-components'
import { IconLogo } from '../../assets/icons';
import HashText from '../atoms/HashText';

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  & .logo {
    display: flex;
    align-items: center;
    & .logo-name {
      margin-left: 8px;
    }
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

function Header() {
  const menuArrray = ["home", "works", "about-me", "contacts"]
  const { palette } = useTheme();
  return (
    <HeaderWrap>
      <div className='logo'>
        <IconLogo fill={palette.color.default} />
        <div className='logo-name'>Elias</div>
      </div>
      <StyledMenu>
        {
          menuArrray.map(item => {
            return (
              <StyledLink href={`#${item}`} key={item}>
                <HashText text={item} />
              </StyledLink>
            )
          })
        }
      </StyledMenu>
    </HeaderWrap>
  )
}

export default Header