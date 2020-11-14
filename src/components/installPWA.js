import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 767px) {
    font-size: 0.6rem;
  }
`;
//
const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return <StyledButton onClick={onClick}>Install</StyledButton>;
};

export default InstallPWA;
