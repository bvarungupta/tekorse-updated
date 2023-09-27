import React from "react";
import styled from "styled-components";
import { darkModeColors, lightModeColors } from "../styles/colors";
import { useStateProvider } from "../context/StateProvider";

const ServiceCard = ({ imgSrc, description, title }) => {
  const [{ dark_mode }] = useStateProvider();

  return (
    <ServiceCardContainer mode={dark_mode}>
      <img src={imgSrc} alt="" />
      <div className="title">{title}</div>
      <p>{description}</p>
    </ServiceCardContainer>
  );
};

export default ServiceCard;

const ServiceCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  background: ${(props) =>
    props.mode === "dark"
      ? darkModeColors.background
      : lightModeColors.background};
  transition: all 0.3s ease-in-out;
  img {
    height: 100px;
  }
  .title {
    font-size: 28px;
    font-weight: 500;
    color: ${(props) =>
      props.mode === "dark"
        ? darkModeColors.accent
        : lightModeColors.accent} !important;
  }
  p {
    width: 210px;
    height: 90px;
    font-size: small;
    text-align: center;
    color: ${(props) =>
      props.mode === "dark"
        ? darkModeColors.text
        : lightModeColors.text} !important;
  }

  &:hover {
    background: ${(props) =>
      props.mode === "dark"
        ? darkModeColors.hoverBackground
        : lightModeColors.hoverBackground};
    border-radius: 15px;
  }

  @media screen and (max-width: 1024px) {
    width: 280px;
    height: 280px;
    img {
      height: 80px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
