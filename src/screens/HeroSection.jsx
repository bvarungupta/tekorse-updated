import React from "react";
import styled from "styled-components";
import { useParallax } from "react-scroll-parallax";
import doodle from "../assets/doodleLine.png";
import specular from "../assets/specular.svg";
import strip from "../assets/strip.svg";
import { useStateProvider } from "../context/StateProvider";
import { darkModeColors, lightModeColors } from "../styles/colors";
import "../styles/downArrow.css";
const HeroSection = () => {
  const [{ dark_mode }] = useStateProvider();

  const parallaxSpecular = useParallax({
    speed: -10,
    style: {
      top: "10rem",
    },
    rotate: [-200, 0],
  });
  const parallaxText = useParallax({
    speed: 1,
    style: {
      top: "10rem",
    },
    scale: [0.5, 1.2],
  });
  const parallaxStrip = useParallax({
    speed: 1,
    translateX: [0, 100],
  });

  return (
    <HeroContainer mode={dark_mode} id="home" className="">
      <div className="ellipse"></div>
      <img
        src={specular}
        ref={parallaxSpecular.ref}
        className="specular"
        alt=""
      />
      <img className="strip" ref={parallaxStrip.ref} src={strip} alt="" />
      <header ref={parallaxText.ref}>
        Where Tech Imagination <br /> Meets Practical <br />{" "}
        <span>Innovation</span>
      </header>
      <img className="doodle-line" src={doodle} alt="img"></img>
      <div className="arrow-container">
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
      <div className="blue-shadow"></div>
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  background-color: ${(props) =>
    props.mode === "dark"
      ? darkModeColors.background
      : lightModeColors.background};
  color: ${(props) =>
    props.mode === "dark"
      ? darkModeColors.text
      : lightModeColors.text} !important;
  position: relative;
  height: 100vh;
  row-gap: 1.5rem;
  z-index: 5;
  .ellipse {
    top: 0;
    left: 0;
    width: 411px;
    height: 200px;
    /* z-index: 5; */
    position: absolute;
    background: linear-gradient(
      118deg,
      rgba(0, 22, 255, 0.29) 32.83%,
      rgba(26, 45, 255, 0) 175.21%,
      rgba(69, 84, 239, 0.61) 175.21%
    );
    filter: blur(151px);
  }
  .specular {
    position: absolute;
    left: -5rem;
    top: 10rem;
  }
  .strip {
    position: absolute;
    right: 0;
    bottom: 5rem;
  }
  .blue-shadow {
    z-index: 5;
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 200px;
    flex-shrink: 0;
    background: rgba(51, 67, 246, 0.38);
    filter: blur(192.5px);
  }
  header {
    text-align: center;
    font-size: 80px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    color: ${(props) =>
      props.mode === "dark"
        ? darkModeColors.text
        : lightModeColors.text} !important;
    span {
      background: linear-gradient(308deg, #9278de 0%, #5238a9 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .doodle-line {
    width: 515px;
    height: 59.016px;
    /* color: #5238a9; */
  }

  /* media screens */

  @media screen and (max-width: 1024px) {
    .white-glow {
      top: -5rem;
      left: -5rem;
    }
    header {
      font-size: 70px;
      margin-top: 2rem;
    }
    .doodle-line {
      width: 40%;
      height: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    .white-glow {
      top: -5rem;
      left: -5rem;
    }
    header {
      font-size: 50px;
      margin-top: 2rem;
      color: ${(props) =>
        props.mode === "dark"
          ? darkModeColors.text
          : lightModeColors.primary} !important;
    }
    .doodle-line {
      width: 30%;
      height: 20px;
    }
  }
  @media screen and (max-width: 426px) {
    .white-glow {
      top: -5rem;
      left: -5rem;
    }
    header {
      font-size: 40px;
      margin-top: 2rem;
    }
    .doodle-line {
      width: 30%;
      height: 20px;
    }
    .strip {
      width: 60%;
    }
  }
`;
