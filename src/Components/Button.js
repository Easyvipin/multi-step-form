import React from "react";
import styled from "styled-components";
import colors from "@app/themes/colors";
import fonts from "@app/themes/fonts";

const StyledButton = styled.button`
  background: ${colors.primary};
  font-size: ${fonts.size.mobileMedium};
  color: ${colors.buttonText};
  padding: 1rem 1rem;
  text-align: center;
  outline: none;
  border-radius: 0.4rem;
  width: 95%;
  margin: auto;
  margin-top: 2rem;
  opacity: 0.8;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const Button = ({ handler, text }) => {
  return <StyledButton onClick={() => handler()}>{text}</StyledButton>;
};

export default Button;
