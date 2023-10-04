import React from "react";
import styled from "styled-components";
import logo from "../assets/main_logo.png";
import { BiLogoLinkedin, BiLogoInstagramAlt } from "react-icons/bi";
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
          <form
            action="https://formsubmit.co/info@tekorse.com"
            method="POST"
            className="form"
          >
            <input type="hidden" name="_template" value="table" />
            <div className="name">
              <input type="text" name="First Name" placeholder="First Name" />
              <input type="text" name="Last Name" placeholder="Last Name" />
            </div>
            <input type="email" name="Email" placeholder="Email" />
            <input
              type="number"
              name="Phone Number"
              placeholder="+91 Phone Number"
            />
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="contact-footer">
        <div className="logo">
          <img src={logo} alt="Tekorse" />
        </div>
        <div className="contact-info">
          <div className="social">
            <p>Follow us on </p>
            <div className="social_icons">
              <a
                href="https://twitter.com/tekorse"
                target="_blank"
                rel="noreferrer"
              >
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
          </div>
          <div className="address">
            <span>Address</span>
            <p>Hyderabad, India</p>
          </div>
          <div className="email">
            <a href="mailto:info@tekorse.com">
              <span>Mail us</span>
              <p>info@tekorse.com</p>
            </a>
          </div>
          <div className="phone">
            <span>Phone </span>
            <p>+91 7569959211</p>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  width: 100vw;
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
          color: ${(props) =>
            props.mode === "dark" ? darkModeColors.text : lightModeColors.text};
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
    height: 35vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) =>
      props.mode === "dark" ? darkModeColors.text : lightModeColors.text};

    width: 100%;
    .logo {
      img {
        width: 170px;
      }

      font-weight: 700;
    }
    .contact-info {
      display: flex;
      gap: 3rem;
      .social {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        p {
          font-weight: 500;
          font-size: larger;
          color: ${(props) =>
            props.mode === "dark"
              ? darkModeColors.background
              : lightModeColors.background} !important;
        }
        .social_icons {
          display: flex;
          gap: 0.5rem;
          /* align-items: center; */
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${(props) =>
              props.mode === "dark"
                ? darkModeColors.secondary
                : lightModeColors.secondary};
            height: 25px;
            width: 25px;
            border-radius: 50%;
            .icon {
              color: ${(props) =>
                props.mode === "dark"
                  ? darkModeColors.text
                  : lightModeColors.text};
            }
          }
        }
      }
      .address,
      .phone {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .email {
        a {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      }
      span {
        font-size: larger;
        font-weight: 500;
        color: ${(props) =>
          props.mode === "dark"
            ? darkModeColors.background
            : lightModeColors.background};
      }
      p {
        font-size: smaller;
        color: ${(props) =>
          props.mode === "dark"
            ? darkModeColors.secondary
            : lightModeColors.secondary};
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .contact-footer {
      flex-direction: column;
      row-gap: 2rem;
    }
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
    .contact-footer {
      padding-block: 2rem;
      height: max-content;
      .contact-info {
        flex-direction: column;
        .social {
          .social_icons {
            justify-content: center;
          }
        }
        .address,
        .email,
        .phone {
          text-align: center;
        }
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
      .contact-footer {
        .logo {
          img {
            width: 150px;
          }
        }
      }
    }
  }
`;
