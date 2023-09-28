import React from "react";
import styled from "styled-components";
import { darkModeColors, lightModeColors } from "../styles/colors";
import { useStateProvider } from "../context/StateProvider";

const StatsCard = ({ imgSrc, title }) => {
  const [{ dark_mode }] = useStateProvider();

  return (
    <StatsCardContainer mode={dark_mode}>
      <img src={imgSrc} alt="" />
      <header>{title}</header>
    </StatsCardContainer>
  );
};

export default StatsCard;

const StatsCardContainer = styled.div`
  width: 300px !important;
  height: 300px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #fff; */
  transition: all 0.3s ease-in-out;

  img {
    width: 200px;
    height: 200px;
  }
  header {
    color: ${(props) =>
      props.mode === "dark"
        ? darkModeColors.text
        : lightModeColors.text} !important;
    font-size: larger;
    font-weight: 600;
  }
  @media screen and (max-width: 1024px) {
    width: 280px;
    height: 280px;
    img {
      height: 180px;
    }
  }
  &:hover {
    background: ${(props) =>
      props.mode === "dark"
        ? darkModeColors.hoverBackground
        : lightModeColors.hoverBackground};
    border-radius: 15px;
  }
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 590px) {
    img {
      width: 250px;
    }
    header {
      font-size: 20px;
    }
  }
`;
