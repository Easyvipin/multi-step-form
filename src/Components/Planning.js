import React, { useRef, useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { FormContext } from "@app/Context/FormContext";
import Headline from "./Headline";
import CheckBox from "./CheckBox";
import User from "@Images/user.jpg";
import Team from "@Images/team.jpg";
import { PLANNING_CONSTANTS } from "@app/utils/constants";

const {
  HEADLINE,
  SUB_HEADLINE,
  LABEL_TITLE_ONE,
  LABEL_DESCRIPTION_ONE,
  LABEL_TITLE_TWO,
  LABEL_DESCRIPTION_TWO,
  BUTTON_TEXT,
} = PLANNING_CONSTANTS;

const StyledDivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;
`;
const Planning = () => {
  const { setProgressId, formData, setFormData } = useContext(FormContext);
  let myself = useRef();
  let team = useRef();
  const { plan } = formData;
  const validFields = () => {
    if (myself.current.checked || team.current.checked) {
      setFormData((prevData) => ({
        ...prevData,
        plan: myself.current.checked ? "myself" : "team",
      }));
      setProgressId((prevId) => prevId + 1);
    }
  };

  return (
    <div>
      <Headline headline={HEADLINE} subHeadline={SUB_HEADLINE} />
      <StyledDivContainer>
        <CheckBox
          value={"myself"}
          checkBoxRef={myself}
          title={LABEL_TITLE_ONE}
          desc={LABEL_DESCRIPTION_ONE}
          iconSrc={User}
          defaultActive={plan === "myself"}
        />
        <CheckBox
          value={"team"}
          checkBoxRef={team}
          title={LABEL_TITLE_TWO}
          desc={LABEL_DESCRIPTION_TWO}
          iconSrc={Team}
          defaultActive={plan === "team"}
        />
      </StyledDivContainer>
      <Button text={BUTTON_TEXT} handler={validFields} />
    </div>
  );
};

export default Planning;
