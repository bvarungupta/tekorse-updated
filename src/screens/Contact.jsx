import React from "react";
import styled from "styled-components";
import logo from "../assets/mainLogo.svg";
import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { RiTwitterXFill } from "react-icons/ri";
import { darkModeColors, lightModeColors } from "../styles/colors";
import { useStateProvider } from "../context/StateProvider";

const Contact = () => {
  const [{ dark_mode }] = useStateProvider();

  return (
    <ContactContainer mode={dark_mode} id="contact">
      <div className="contact-container">
        <div className="left">
          <div className="context">
            <header>Let's start a conversation</header>
            <p>
              We’re are happy to answer any questions or provide with an
              estimate. Just send a message in the form below with any questions
              you may have.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="form">
            <div className="name">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="+91 Phone Number" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
          </div>
          <button className="submit-btn">Submit</button>
        </div>
      </div>
      <div className="contact-footer"></div>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  width: 100vw;
  /* height: 100vh; */
  background: ${(props) =>
    props.mode === "dark"
      ? darkModeColors.background
      : lightModeColors.background};
  display: flex;
  flex-direction: column;
  .contact-container {
    width: 100%;
    height: 65%;
    display: flex;
    .left {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .context {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 80%;
        header {
          font-size: 60px;
          font-weight: 700;
          color: ${(props) =>
            props.mode === "dark"
              ? darkModeColors.text
              : lightModeColors.text} !important;
        }
        p {
          width: 80%;
          color: ${(props) =>
            props.mode === "dark"
              ? darkModeColors.text
              : lightModeColors.text} !important;
        }
      }
    }
    .right {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .name {
          display: flex;
          justify-content: space-between;
          input {
            width: 48%;
          }
        }
        input,
        textarea {
          padding: 1rem 1rem;
          border-radius: 5px;
          background-color: ${(props) =>
            props.mode === "dark"
              ? darkModeColors.background
              : lightModeColors.background};
          border: 1px solid
            ${(props) =>
              props.mode === "dark"
                ? darkModeColors.accent
                : lightModeColors.secondary};

          &:focus {
            outline: none;
          }
        }
      }
      .submit-btn {
        margin-block: 0.8rem;
        border: none;
        background-color: ${(props) =>
          props.mode === "dark" ? darkModeColors.text : lightModeColors.text};
        color: ${(props) =>
          props.mode === "dark"
            ? darkModeColors.background
            : lightModeColors.background};
        padding: 0.8rem 1.7rem;
        border-radius: 7px;
      }
    }
  }
  .contact-footer {
    background-color: ${(props) =>
      props.mode === "dark" ? darkModeColors.text : lightModeColors.text};

    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .contact-container {
      flex-direction: column;
      row-gap: 2rem;
      .left {
        width: 100%;
        .context {
          flex-direction: column;
          align-items: center;
          header {
            font-size: 40px;
          }
          p {
            display: none;
          }
        }
      }
      .right {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .contact-container {
      .left {
        .context {
          header {
            font-size: 30px;
            text-align: center;
          }
          p {
            display: none;
          }
        }
      }
      .right {
        .form {
          .name {
            flex-direction: column;
            gap: 1rem;
            input {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;
