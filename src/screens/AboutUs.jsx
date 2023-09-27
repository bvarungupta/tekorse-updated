import React from "react";
import styled from "styled-components";
import illusSvg from "../assets/illus.svg";
import aboutUs from "../assets/about_us.png";
import { darkModeColors, lightModeColors } from "../styles/colors";
import { useStateProvider } from "../context/StateProvider";

const AboutUs = () => {
  const [{ dark_mode }] = useStateProvider();

  return (
    <AboutUsContainer mode={dark_mode} id="about">
      <header>
        Who We Are <img src={illusSvg} alt="" />
      </header>
      <div className="main">
        <div className="text-container">
          <p>
            Tekorse Technologies is a leading provider of custom software
            development services.We help businesses of all sizes solve their
            most challenging problems with innovative software solutions.{" "}
          </p>
          <p>
            Our Company specialized in human - centric digital experiences and
            improve the products every single day. Together with a team of
            professionals we come up with cool and important concepts , we will
            help your business reach a new level.
          </p>
        </div>
        <div className="img-container">
          <img src={aboutUs} alt="" />
        </div>
      </div>
    </AboutUsContainer>
  );
};

export default AboutUs;

const AboutUsContainer = styled.div`
  .main {
    display: flex;
    header {
      font-weight: 600;
    }
  }
  overflow-x: hidden;
  z-index: 10;
  height: 100vh;
  background: ${(props) =>
    props.mode === "dark"
      ? darkModeColors.background
      : lightModeColors.background};
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 2rem;
  header {
    margin-top: 5rem;
    margin-left: 10rem;
    position: relative;
    color: ${(props) =>
      props.mode === "dark"
        ? darkModeColors.accent
        : lightModeColors.accent} !important;

    font-size: 60px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.85px;
    img {
      position: absolute;
      left: 15%;
    }
  }
  .text-container {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    p {
      width: 65%;
      color: ${(props) =>
        props.mode === "dark"
          ? darkModeColors.text
          : lightModeColors.text} !important;

      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      width: 400px;
    }
  }
  @media screen and (max-width: 1024px) {
    header {
      margin-left: 5rem;
      font-size: 50px;
      img {
        display: none;
      }
    }
    .text-container {
      flex-direction: column;
      p {
        width: 60%;
        font-size: 14px;
      }
    }
    .img-container {
      img {
        width: 300px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    header {
      margin-left: 0;
      text-align: center;
    }
    .main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* height: ; */
      header {
        margin-left: 0;
        margin-top: 2rem;
      }
    }
    .text-container {
      align-items: center;
      flex-direction: column;
      row-gap: 2rem;
      margin-top: 2rem;
      p {
        width: 60%;
        font-size: 14px;
        text-align: center;
      }
    }
    .img-container {
      /* margin-top: 2rem; */
      width: 50%;
      img {
        width: 100%;
      }
    }
    @media screen and (max-width: 500px) {
      .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 3rem;

        .text-container {
          p {
            width: 80%;
          }
        }
      }
      .img-container {
        margin-bottom: 3rem;
        img {
          width: 200px;
        }
      }
      header {
        text-align: center;
        margin-top: 5rem;
      }
    }
  }
`;
