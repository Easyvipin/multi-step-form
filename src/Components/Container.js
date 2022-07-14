import { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "@app/Context/FormContext";
import Workspace from "@Components/Workspace";
import Planning from "./Planning";
import Launch from "./Launch";
import Progress from "./Progress";
import Welcome from "./Welcome";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  flex: 2;
`;

const FormContainer = styled.div`
  margin-top: 2rem;
`;

function Container() {
  const { progressId } = useContext(FormContext);

  const renderWithProgressId = (id) => {
    switch (id) {
      case 1:
        return <Welcome />;
      case 2:
        return <Workspace />;
      case 3:
        return <Planning />;
      case 4:
        return <Launch />;
    }
  };

  return (
    <StyledContainer>
      <Progress start={1} end={4} />
      <FormContainer>{renderWithProgressId(progressId)}</FormContainer>
    </StyledContainer>
  );
}

export default Container;
