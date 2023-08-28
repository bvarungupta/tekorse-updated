import React from "react";
import styled from "styled-components";
import StatsCard from "../components/StatsCard";
import { statsData } from "../utils/StatsCardData";

const WhyChooseUs = () => {
  return (
    <WhyChooseUsContainer>
      <div className="container">
        <div className="header">
          <header>Why Choose Us</header>
        </div>
        <div className="content">
          {statsData.map(({ title, imgSrc }, id) => (
            <StatsCard key={id} title={title} imgSrc={imgSrc} />
          ))}
        </div>
      </div>
    </WhyChooseUsContainer>
  );
};

export default WhyChooseUs;

const WhyChooseUsContainer = styled.div`
  padding-top: 5rem;
  width: 100vw;
  background: #010100;
  color: #e5e1e1;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    .header {
      header {
        font-size: 60px;
        font-weight: 600;
      }
    }
  }
  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    place-items: center;
    padding-top: 5rem;
  }
  @media screen and (max-width: 1024px) {
    .container {
      .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 2rem;
      }
    }
    .content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 670px) {
    .content {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media screen and (max-width: 590px) {
    .container {
      .header {
        header {
          font-size: 40px;
          text-align: center;
        }
      }
    }
  }
`;
