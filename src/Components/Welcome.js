import { useContext, useRef } from "react";
import styled from "styled-components";
import { FormContext } from "@app/Context/FormContext";
import Button from "./Button";
import TextFormContainer from "./TextFormContainer";
import Headline from "./Headline";
import { WELCOME_CONSTANTS } from "@app/utils/constants";

const Welcome = () => {
  const {
    HEADLINE,
    SUB_HEADLINE,
    LABEL_FULL_NAME,
    LABEL_DISPLAY_NAME,
    BUTTON_TEXT,
  } = WELCOME_CONSTANTS;

  const { setProgressId, formData, setFormData } = useContext(FormContext);
  const { fullName, displayName } = formData;

  let fullNameRef = useRef();
  let displayNameRef = useRef();

  const validFields = () => {
    console.log("called");
    let fullNameInput = fullNameRef.current.value;
    let displayNameInput = displayNameRef.current.value;
    if (fullNameInput.length > 0 && displayNameInput.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        fullName: fullNameInput,
        displayName: displayNameInput,
      }));
      setProgressId((prevId) => prevId + 1);
    } else {
      fullNameRef.current.focus();
    }
  };

  const StyledDivContainer = styled.div`
    margin-top: 3rem;
  `;

  return (
    <div>
      <Headline headline={HEADLINE} subHeadline={SUB_HEADLINE} />
      <StyledDivContainer>
        <TextFormContainer
          inputRef={fullNameRef}
          label={LABEL_FULL_NAME}
          validationType={"name"}
          value={fullName}
        />
        <TextFormContainer
          inputRef={displayNameRef}
          label={LABEL_DISPLAY_NAME}
          validationType={"name"}
          value={displayName}
        />
      </StyledDivContainer>
      <Button text={BUTTON_TEXT} handler={validFields} />
    </div>
  );
};

export default Welcome;
