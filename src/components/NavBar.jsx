import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/main_logo.png";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import "../styles/btnStyles.css";
import { darkModeColors, lightModeColors } from "../styles/colors";
import { CgMenu, CgClose } from "react-icons/cg";
import { reducerCases } from "../context/Constants";
import { useStateProvider } from "../context/StateProvider";

const NavBar = () => {
  const [hamBurger, setHamBurger] = useState(false);

  const [{ darkMode, dark_mode }, dispatch] = useStateProvider();

  const toggleDarkMode = () => {
    dispatch({
      type: reducerCases.SET_DARK_MODE,
      darkMode: !darkMode,
    });
    dispatch({
      type: reducerCases.DARK_MODE,
      dark_mode: dark_mode === "dark" ? "light" : "dark",
    });
  };
  return (
    <NavContainer mode={dark_mode}>
      <div className="logo">
        <img src={logo} alt="Tekorse" />
      </div>
      <ul className="nav-items">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="btn-container">
        <button className="letsTalk">
          <a href="#contact">Let's Talk</a>
        </button>
        {darkMode ? (
          <MdDarkMode className="theme hidden" onClick={toggleDarkMode} />
        ) : (
          <MdOutlineDarkMode
            className="theme hidden"
            onClick={toggleDarkMode}
          />
        )}
      </div>

      {hamBurger ? (
        <CgClose
          className="ham-burger"
          onClick={() => setHamBurger(!hamBurger)}
        />
      ) : (
        <CgMenu
          className="ham-burger"
          onClick={() => setHamBurger(!hamBurger)}
        />
      )}
      {hamBurger && (
        <ul className="mobile-nav">
          <li onClick={() => setHamBurger(!hamBurger)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setHamBurger(!hamBurger)}>
            <a href="#blog">Blog</a>
          </li>
          <li onClick={() => setHamBurger(!hamBurger)}>
            <a href="#services">Services</a>
          </li>
          <li onClick={() => setHamBurger(!hamBurger)}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => setHamBurger(!hamBurger)}>
            <a href="#contact">Contact</a>
          </li>
          <li
            className="theme-container"
            onClick={() => setHamBurger(!hamBurger)}
          >
            <button className="letstalk">
              <a href="#contact">Let's Talk</a>
            </button>
            {/* <DarkModeToggle
              className="theme"
              onChange={toggleDarkMode}
              checked={darkMode}
              size={55}
            /> */}
            {darkMode ? (
              <MdDarkMode className="theme" onClick={toggleDarkMode} />
            ) : (
              <MdOutlineDarkMode className="theme" onClick={toggleDarkMode} />
            )}
          </li>
        </ul>
      )}
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  border-bottom: ${(props) =>
    props.mode === "dark"
      ? darkModeColors.secondary
      : lightModeColors.secondary};
  color: ${lightModeColors.text} 1px solid;
  position: sticky;
  top: 0;
  height: 105px;
  box-shadow: ${(props) =>
    props.mode === "dark"
      ? "0px 4px 10px 0px rgba(16, 95, 216, 0.20)"
      : "0px 4px 10px 0px #dedcff"} !important;
  /* box-shadow: 0px 4px 67px 0px #dedcff; */
  background-color: ${(props) =>
    props.mode === "dark"
      ? darkModeColors.background
      : lightModeColors.background};
  color: ${lightModeColors.text};
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 20;
  .logo {
    img {
      width: 170px;
    }
    font-weight: 700;
  }
  .nav-items {
    display: flex;
    column-gap: 2rem;
    list-style: none;
    li {
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      a {
        color: ${(props) =>
          props.mode === "dark"
            ? darkModeColors.text
            : lightModeColors.text} !important;
      }
    }
  }
  .btn-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    .theme {
      color: ${(props) =>
        props.mode === "dark"
          ? darkModeColors.text
          : lightModeColors.text} !important;
      font-size: 2rem;
      cursor: pointer;
    }
  }
  .letsTalk {
    background-color: ${(props) =>
      props.mode === "dark"
        ? darkModeColors.primary
        : lightModeColors.primary} !important;
    color: ${(props) =>
      props.mode === "dark"
        ? darkModeColors.text
        : lightModeColors.background} !important;
    width: 126px;
    height: 50px;
    flex-shrink: 0;
    border: none;
    border-radius: 10px;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: relative;
    z-index: 0;
    transition: all 0.3s ease-in-out;
    a {
      text-decoration: none;
      color: ${(props) =>
        props.mode === "dark"
          ? darkModeColors.text
          : lightModeColors.background} !important;
    }

    cursor: pointer;
    &:hover {
      background-color: rgba(67, 83, 255, 0.9);
      color: ${lightModeColors.text};
      transition: all 0.3s ease-in-out;
      box-shadow: 0px 0px 20px rgba(67, 83, 255, 0.5);
      z-index: 1;
    }
  }
  .ham-burger {
    display: none;
    color: ${lightModeColors.primary};
  }
  .mobile-nav {
    position: absolute;
    background-color: ${(props) =>
      props.mode === "dark"
        ? darkModeColors.background
        : lightModeColors.background};
    top: 105px;
    left: 0;
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: all 0.3s ease-in-out;
    li {
      list-style: none;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: ${(props) =>
        props.mode === "dark"
          ? darkModeColors.text
          : lightModeColors.text} !important;
    }
    .theme-container {
      display: flex;
      align-items: center;
      gap: 1rem;
      .letstalk {
        border: none;
        outline: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        background-color: ${(props) =>
          props.mode === "dark"
            ? darkModeColors.primary
            : lightModeColors.primary} !important;
        a {
          font-family: "Plus Jakarta Sans", sans-serif;
          color: ${(props) =>
            props.mode === "dark"
              ? darkModeColors.text
              : lightModeColors.background} !important;
        }
      }
      .theme {
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .hidden {
      display: none;
    }
    .logo {
      font-size: 2rem;
    }
    .nav-items {
      display: none;
    }
    .letsTalk {
      display: none;
    }
    .ham-burger {
      display: block;
    }
    .glow-on-hover {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    .logo {
      font-size: 1rem;
      img {
        width: 100px;
      }
    }
    .nav-items {
      display: none;
    }
    .ham-burger {
      display: block;
    }
    .letsTalk {
      display: none;
    }
  }
`;
