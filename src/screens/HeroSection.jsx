import React from "react";
import styled from "styled-components";
import { useParallax } from "react-scroll-parallax";
import whiteGlow from "../assets/white_glow.png";
import doodle from "../assets/doodleLine.png";
import specular from "../assets/specular.svg";
import strip from "../assets/strip.svg";

const HeroSection = () => {
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
    <HeroContainer id="home" className="">
      <img
        src={specular}
        ref={parallaxSpecular.ref}
        className="specular"
        alt=""
      />
      <img className="strip" ref={parallaxStrip.ref} src={strip} alt="" />
      <img className="white-glow" src={whiteGlow} alt="" />
      <header ref={parallaxText.ref}>
        Where Tech Imagination <br /> Meets Practical <br />{" "}
        <span>Innovation</span>
      </header>
      <img className="doodle-line" src={doodle} alt="img"></img>
      <div className="btn-container">
        <button className="">
          <a href="#contact">Explore</a>
        </button>
        <div className="over-laver"></div>
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
  background-color: #010100;
  position: relative;
  color: #fff;
  height: 100vh;
  row-gap: 1.5rem;
  z-index: 5;
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
  .white-glow {
    top: -5rem;
    left: -5rem;
    width: 512px;
    height: 249px;
    position: absolute;
    z-index: 5;
  }
  header {
    text-align: center;
    font-size: 80px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
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
  }
  .btn-container {
    position: relative;
    button {
      width: 170px;
      height: 60px;
      background-color: #4353ff;
      font-size: larger;
      font-weight: 500;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      a {
        color: #fff;
      }
    }

    .over-laver {
      position: absolute;
      bottom: -10px;
      left: -10px;
      width: 170px;
      height: 60px;
      border-radius: 10px;
      border: 2px solid #4353ff;
    }

    .over-laver:hover {
      bottom: 0;
      left: 0;
      transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
    }
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
    .btn-container {
      button {
        width: 150px;
        height: 50px;
      }
      .over-laver {
        width: 150px;
        height: 50px;
      }
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
    }
    .doodle-line {
      width: 30%;
      height: 20px;
    }
    .btn-container {
      button {
        width: 150px;
        height: 50px;
      }
      .over-laver {
        width: 150px;
        height: 50px;
      }
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
    .btn-container {
    }
    .strip {
      width: 60%;
    }
  }
`;
