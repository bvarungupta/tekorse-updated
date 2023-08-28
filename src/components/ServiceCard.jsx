import React from "react";
import styled from "styled-components";
const ServiceCard = ({ imgSrc, description, title }) => {
  return (
    <ServiceCardContainer>
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
  img {
    height: 100px;
  }
  .title {
    font-size: 28px;
    font-weight: 500;
    color: #e5e1e1;
  }
  p {
    width: 210px;
    height: 90px;
    font-size: small;
    text-align: center;
    color: #bfbfbf;
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
