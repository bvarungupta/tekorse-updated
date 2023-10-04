import React from "react";
import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";
import { useStateProvider } from "../context/StateProvider";
import { darkModeColors, lightModeColors } from "../styles/colors";

const WhatsappLogo = () => {
  const [{ dark_mode }] = useStateProvider();

  return (
    <WhatsappLogoContainer mode={dark_mode}>
      <a
        href="https://wa.me/+917569959211"
        target="_blank"
        className="whatsapp-logo"
        rel="noreferrer"
      >
        <BsWhatsapp size={22} />
      </a>
      <p></p>
    </WhatsappLogoContainer>
  );
};

export default WhatsappLogo;

const WhatsappLogoContainer = styled.div`
  .whatsapp-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) =>
      props.mode === "dark" ? darkModeColors.text : lightModeColors.background};
    background-color: #25d267;
    height: 45px;
    width: 45px;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    border-radius: 50%;
    z-index: 100;
  }
`;
