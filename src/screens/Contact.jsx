import React from "react";
import styled from "styled-components";
import logo from "../assets/mainLogo.svg";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <div className="ellipse"></div>
      <div className="container">
        <div className="header-part">
          <header>Contact Us</header>
          {/* <p>
            Get in touch with us today. Whether you have questions, ideas, or
            simply want to say hello, we're here to listen. Your feedback and
            inquiries matter to us, and we're committed to providing you with
            the support and information you need. Reach out via the contact form
            below, or connect with us through our social media channels. We look
            forward to hearing from you
          </p> */}
        </div>
        <div className="bottom">
          <div className="left">
            <header>
              <img src={logo} alt="Tekorse" />
            </header>
            <div className="social">
              <a
                href="https://twitter.com/tekorse"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterSquare className="icon" />
              </a>
              <a
                href="https://www.instagram.com/tekorsetechnologies/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/tekorse-technologies/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="icon" />
              </a>
            </div>
            <p className="email">
              <a href="mailto:info@tekorse.com">
                <HiOutlineMail /> info@tekorse.com
              </a>
            </p>
            <p className="phone">
              <a href="#phone">
                <FiPhone />
                <span>
                  +91 9032201605 <br /> +91 9848811239
                </span>
              </a>
            </p>
          </div>
          <div className="address">
            <header>Address</header>
            <p>Hyderabad, India</p>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #010100;
  color: #fff;
  position: relative;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .ellipse {
    z-index: 5;
    position: absolute;
    width: 902.767px;
    height: 462.979px;
    transform: rotate(-10.229deg);
    border-radius: 902.767px;
    background: linear-gradient(
      268deg,
      #3d95e7 0%,
      rgba(179, 89, 249, 0.55) 44.72%,
      rgba(127, 55, 245, 0) 100%
    );
    filter: blur(130.5px);
  }
  .container {
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .header-part {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      header {
        font-size: 65px;
        font-weight: 700;
        width: 50%;
      }
      p {
        width: 40%;
        font-size: 14px;
        font-weight: 300;
        text-align: end;
      }
    }
    .bottom {
      display: flex;
      width: 80%;
      justify-content: space-between;
      .left {
        display: flex;
        flex-direction: column;
        row-gap: 1.2rem;
        color: #bfbfbf;
        header {
          font-size: 50px;
          font-weight: 500;
        }
        .social {
          display: flex;
          justify-content: space-between;
          width: 50%;
          .icon {
            font-size: 30px;
          }
        }
        .email,
        .phone {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          a {
            display: flex;
            align-items: center;
            gap: 0.7rem;
          }
        }
        .phone {
          a {
            span {
              font-size: 12px;
            }
          }
        }
      }
      .address {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
        header {
          font-size: 50px;
          font-weight: 500;
        }
        p {
          text-align: end;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .container {
      .header-part {
        header {
          font-size: 50px;
        }
        p {
          width: 50%;
          font-size: 12px;
        }
      }
      .bottom {
        .left {
          header {
            font-size: 40px;
          }
        }
        .address {
          header {
            font-size: 40px;
          }
          p {
            font-size: 12px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .container {
      .header-part {
        flex-direction: column;
        row-gap: 2rem;
        header {
          font-size: 35px;
          text-align: center;
        }
        p {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
  @media screen and (max-width: 550px) {
    .container {
      .header-part {
        header {
          font-size: 27px;
        }
        p {
          font-size: 10px;
        }
      }
      .bottom {
        flex-direction: column;
        row-gap: 2rem;
        align-items: center;
        .left {
          align-items: center;
        }
        .address {
          align-items: center;
          p {
            text-align: center;
          }
        }
      }
    }
  }
`;
