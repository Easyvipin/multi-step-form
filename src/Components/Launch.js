import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Headline from "./Headline";
import Tick from "@Images/tick.jpg";

const LaunchContainer = styled.div`
  text-align: center;
`;

const StyledImg = styled.img`
  width: 7.5rem;
  height: 6rem;
`;

const Launch = () => {
  const handleLaunch = () => {
    //actions on launch
  };

  return (
    <LaunchContainer>
      <StyledImg src={Tick} />
      <Headline
        headline={"Congratulations, Eden!"}
        subHeadline={"You have completed onboarding, you can start using Eden!"}
      />
      <Button text="Launch Eden" handler={handleLaunch} />
    </LaunchContainer>
  );
};

export default Launch;
