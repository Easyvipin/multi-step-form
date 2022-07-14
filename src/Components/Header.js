import React from "react";
import styled from "styled-components";
import eden from "../Images/eden.jpg";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={eden} alt="eden" />
    </StyledHeader>
  );
};

export default Header;
