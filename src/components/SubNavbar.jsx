import React from "react";
import styled from "styled-components";
import { BiLogoLinkedin, BiLogoInstagramAlt } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { colorCodes } from "../styles/colors";

const SubNavbar = () => {
  return (
    <SubNavbarContainer>
      <div className="social_icons">
        <a href="https://twitter.com/tekorse" target="_blank" rel="noreferrer">
          <RiTwitterXFill size={17} className="icon" />
        </a>
        <a
          href="https://www.instagram.com/tekorsetechnologies/"
          target="_blank"
          rel="noreferrer"
        >
          <BiLogoInstagramAlt size={20} className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/company/tekorse-technologies/"
          target="_blank"
          rel="noreferrer"
        >
          <BiLogoLinkedin size={20} className="icon" />
        </a>
      </div>
      <div className="right">
        <div className="address">
          <MdLocationOn className="icon" />
          <p>Hyderabad, India</p>
        </div>
        <div className="email">
          <a href="mailto:info@tekorse.com">
            <HiOutlineMail className="icon" />
            <p>info@tekorse.com</p>
          </a>
        </div>
        <div className="phone">
          <FiPhone className="icon" />
          <p>+91 7569959211</p>
        </div>
      </div>
    </SubNavbarContainer>
  );
};

export default SubNavbar;

const SubNavbarContainer = styled.div`
  background-color: ${colorCodes.primaryColorBlue};
  padding-block: 0.3rem;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 2rem;
  .social_icons {
    display: flex;
    gap: 0.5rem;
    /* align-items: center; */
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${colorCodes.white_1};
      height: 25px;
      width: 25px;
      border-radius: 50%;
      .icon {
        color: ${colorCodes.primaryColorBlue};
      }
    }
  }
  .right {
    display: flex;
    font-size: smaller;
    color: ${colorCodes.white_1};
    gap: 2rem;
    .address {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      .icon {
        font-size: 1rem;
      }
    }
    .email {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colorCodes.white_1};
        gap: 0.5rem;
      }
    }
    .phone {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-size: smaller;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
