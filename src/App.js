import styled from "styled-components";
import { colors, fonts } from "@themes";
import Container from "@Components/Container";
import Header from "./Components/Header";

const StyledContainer = styled.div`
  width: 100%;
  height: auto;
  background: ${colors.background};
  box-sizing: border-box;
  padding: 4em 1rem;
  font-family: ${fonts.family.inter};
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <div className="App">
      <StyledContainer>
        <Header />
        <Container />
      </StyledContainer>
    </div>
  );
}

export default App;
