import React, { useRef, useContext } from "react";
import styled from "styled-components";
import TextFormContainer from "./TextFormContainer";
import Button from "./Button";
import { FormContext } from "@app/Context/FormContext";
import Headline from "./Headline";

import { WORKSPACE_CONSTANTS } from "@app/utils/constants";

const StyledDivContainer = styled.div`
  margin-top: 3rem;
`;

const Workspace = () => {
  const { setProgressId, formData, setFormData } = useContext(FormContext);

  const {
    HEADLINE,
    SUB_HEADLINE,
    LABEL_WORKSPACE_NAME,
    LABEL_WORKPSACE_URL,
    BUTTON_TEXT,
  } = WORKSPACE_CONSTANTS;

  let nameRef = useRef();
  let urlRef = useRef();
  const { workspaceName, workspaceUrl } = formData;

  const validFields = () => {
    let nameInput = nameRef.current.value;
    let urlInput = urlRef.current.value;
    if (nameInput.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        workspaceName: nameInput,
        workspaceUrl: urlInput,
      }));
      setProgressId((prevId) => prevId + 1);
    } else {
      nameInput.current.focus();
    }
  };

  return (
    <div>
      <Headline headline={HEADLINE} subHeadline={SUB_HEADLINE} />
      <StyledDivContainer>
        <TextFormContainer
          inputRef={nameRef}
          label={LABEL_WORKSPACE_NAME}
          validationType={"name"}
          value={workspaceName}
        />
        <TextFormContainer
          inputRef={urlRef}
          label={LABEL_WORKPSACE_URL}
          type="pre-text"
          placeholder={"Example"}
          preText={"www.eden.com/"}
          isOptional={true}
          validationType={"url"}
          value={workspaceUrl}
        />
      </StyledDivContainer>
      <Button text={BUTTON_TEXT} handler={validFields} />
    </div>
  );
};

export default Workspace;
