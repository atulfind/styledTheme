import React from "react";
import styled from "styled-components";
import { avatar } from "../../assets/images";
import Bordered from "../atoms/Bordered";
import Button from "../atoms/Button";

const BannerWrap = styled.div`
  margin-top: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const BannerLeft = styled.div`
  width: 55%;
  & .special-text {
    font-size: 32px;
    line-height: 42px;
    & .colored {
      color: #C778DD;
    }
  }
  & .description{
    font-size: 16px;
    font-weight: 400;
    margin-top: 32px;
    max-width: 500px;
    line-height: 25px;
  }
  & .text-button {
    margin-top: 24px;
  }
`

const BannerRight = styled.div`
  width: 45%;
  max-width: 460px;
  position: relative;
  & .status{
    width: 88%;
    min-width: 400px;
    display: flex;
    position: relative;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: -5px;
    z-index: 2;
    & .box {
      width: 16px;
      height: 16px;
      background: ${props => props.theme.palette.primary.main};
      margin-right: 10px;
    }
  }
`;

function Banner() {

  return (
    <BannerWrap>
      <BannerLeft>
        <div className="special-text">
          <span>Elias is a </span>
          <span className="colored">web designer</span> <span>and</span> <span className="colored">front-end developer</span>
        </div>
        <div className="description">
          He crafts responsive websites where technologies meet creativity
        </div>
        <Button className="text-button">Contact me!!</Button>
      </BannerLeft>
      <BannerRight>
        <img src={avatar} alt="" />
        <Bordered className="status">
          <div className="box"></div>
          <span>Currently working on Portfolio</span>
        </Bordered>
      </BannerRight>
    </BannerWrap>
  )
}

export default Banner;