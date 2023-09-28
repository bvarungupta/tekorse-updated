import React from "react";
import ServiceCard from "../components/ServiceCard";
import { servicesData } from "../utils/servicesCardData";
import { darkModeColors, lightModeColors } from "../styles/colors";
import { useStateProvider } from "../context/StateProvider";
import styled from "styled-components";

const Services = () => {
  const [{ dark_mode }] = useStateProvider();

  return (
    <ServicesContainer mode={dark_mode} id="services">
      {/* <div className="ellipse"></div> */}
      <div className="services-heading">
        <div className="header-left">
          <header>Our Services</header>
          {/* <p>"The greatest ideas are the simplest." - William Golding</p> */}
        </div>
        <div className="header-right"></div>
      </div>
      <div className="services-list-container">
        {servicesData.map(({ title, imgSrc, description }, id) => (
          <ServiceCard
            key={id}
            title={title}
            imgSrc={imgSrc}
            description={description}
          />
        ))}
      </div>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.div`
  overflow-x: hidden;
  z-index: 5;
  /* height: 100vh; */
  background: ${(props) =>
    props.mode === "dark"
      ? darkModeColors.background
      : lightModeColors.background};

  width: 100%;
  font-weight: 300;
  position: relative;
  display: flex;
  flex-direction: column;
  .ellipse {
    position: absolute;
    right: 0;
    top: -5rem;
    width: 50%;
    height: 50%;
    transform: rotate(-10.229deg);
    border-radius: 902.767px;
    background: linear-gradient(
      268deg,
      #3d95e7 0%,
      rgba(179, 89, 249, 0.55) 44.72%,
      rgba(127, 55, 245, 0) 100%
    );
    filter: blur(87.5px);
  }
  .services-heading {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .header-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 35%;
      header {
        color: ${(props) =>
          props.mode === "dark"
            ? darkModeColors.accent
            : lightModeColors.accent} !important;
        font-size: 60px;
        font-weight: 700;
      }
      p {
        color: ${(props) =>
          props.mode === "dark"
            ? darkModeColors.text
            : lightModeColors.text} !important;
      }
    }
    .header-right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35%;
      p {
        font-size: medium;
        font-weight: 300;
        width: 90%;
      }
    }
  }
  .services-list-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    place-items: center;
    padding-top: 5rem;
  }
  @media screen and (max-width: 1024px) {
    .ellipse {
    }
    .services-heading {
      flex-direction: column;
      row-gap: 2rem;
      .header-left {
        width: 100%;
        row-gap: 1rem;
      }
      .header-right {
        width: 100%;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .services-heading {
      .header-left {
        header {
          font-size: 50px;
        }
        p {
          font-size: 14px;
        }
      }
      .header-right {
        p {
          font-size: 14px;
          width: 80%;
        }
      }
    }
    .services-list-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 620px) {
    .services-list-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media screen and (max-width: 370px) {
    .services-heading {
      .header-left {
        header {
          font-size: 40px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
`;
