import React, { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "@app/Context/FormContext";
import { colors } from "@themes";
import media from "@app/themes/media";

const ProgressContainer = styled.div`
  position: relative;
`;

const StageContainer = styled.div`
  display: inline-block;
  button {
    cursor: pointer;
    border: ${(props) =>
      props?.active === true ? "none" : " 0.1rem solid #edebeb"};
    padding: 0.6rem 0.85rem;
    border-radius: 50%;
    background: ${(props) =>
      props?.active === true ? colors.primary : "#fff"};
    color: ${(props) =>
      props?.active === true ? colors.buttonText : colors.text};
    transition: background 0.3s ease-in;
  }
  div {
    background: ${(props) =>
      props?.active === true ? colors.primary : "#edebeb"};
    height: 0.1rem;
    width: 1.8rem;
    display: inline-block;
    transition: background 0.3s ease-in;
  }
  ${media.lessThan("mobile")`
   button{
    padding: 0.5rem 0.75rem;
    font-size:0.8rem;
   }
   div{
    width: 1rem;
   }
  `}
`;

const Progress = ({ start, end }) => {
  const { progressId, setProgressId } = useContext(FormContext);

  const AllStages = Array.from({ length: end }, (_, index) => index + 1);
  const renderProgressBadge = () => {
    return AllStages.map((stageId, index) => {
      if (stageId !== start && stageId !== end) {
        return (
          <StageContainer active={progressId >= stageId} key={index}>
            <div></div>
            <button
              onClick={() =>
                progressId >= stageId ? setProgressId(stageId) : false
              }
            >
              {stageId}
            </button>
            <div></div>
          </StageContainer>
        );
      } else if (stageId === start) {
        return (
          <StageContainer active={progressId >= stageId} key={index}>
            <button
              onClick={() =>
                progressId >= stageId ? setProgressId(stageId) : false
              }
            >
              {stageId}
            </button>
            <div></div>
          </StageContainer>
        );
      } else {
        return (
          <StageContainer active={progressId >= stageId} key={index}>
            <div></div>
            <button
              onClick={() =>
                progressId >= stageId ? setProgressId(stageId) : false
              }
            >
              {stageId}
            </button>
          </StageContainer>
        );
      }
    });
  };
  return <ProgressContainer>{renderProgressBadge()}</ProgressContainer>;
};

export default Progress;
