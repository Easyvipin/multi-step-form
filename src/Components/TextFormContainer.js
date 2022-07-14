import React, { useState } from "react";
import styled from "styled-components";
import colors from "@app/themes/colors";
import fonts from "@app/themes/fonts";
import { checkInputValidation } from "@app/utils/validations";

const StyledFormInput = styled.div`
  margin: 1rem 0rem;
  width: 95%;
`;
const StyledLabel = styled.div`
  margin: 0.4rem 0rem;
  text-align: left;
  color: ${colors.subHeadline};
  font-weight: ${fonts.weight.semiBold};
  font-size: ${fonts.size.small};

  span {
    color: ${colors.optionalText};
    font-size: ${fonts.size.mobileSmall};
    margin-left: 0.4rem;
  }
`;

const StyledInput = styled.input`
  outline: none;
  border: 0.09rem solid #edebeb;
  width: 100%;
  font-size: ${fonts.size.small};
  padding: 0.8rem 1rem;
  color: ${colors.inputText};
  font-weight: ${fonts.weight.regular};
  border-radius: ${(props) =>
    props.isPreText ? "0 0.4rem 0.4rem 0rem" : "0.4rem"};
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const PreTextInput = styled.div`
  width: 40%;
  border: 0.09rem solid #edebeb;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.medium};
  padding: 0.8rem 1rem;
  border-radius: 0.4rem 0 0 0.4rem;
  color: ${colors.inputText};
`;

const StyledMessageError = styled.span`
  display: ${(props) => (props.errorMessage ? "block" : "none")};
  color: ${colors.Tertiary};
  font-size: ${fonts.size.mobileSmall};
  transition: all 0.3s ease-in;
  margin-top: 0.2rem;
`;

const TextFormContainer = ({
  label,
  value,
  inputRef,
  placeholder,
  type,
  preText,
  isOptional,
  validationType,
}) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const validate = (value, type) => {
    let getError = checkInputValidation(type, value);
    setErrorMessage(getError);
  };

  return (
    <StyledFormInput>
      <StyledLabel>
        {label}
        {isOptional && <span>(optional)</span>}
      </StyledLabel>
      {type === "pre-text" ? (
        <InputContainer>
          <PreTextInput>{preText}</PreTextInput>
          <StyledInput
            ref={inputRef}
            type="text"
            deafaultValue={value}
            placeholder={placeholder}
            isPreText={true}
            onKeyUp={(e) => validate(e.target.value, validationType)}
          />
        </InputContainer>
      ) : (
        <StyledInput
          ref={inputRef}
          defaultValue={value}
          type="text"
          placeholder={placeholder}
          onKeyUp={(e) => validate(e.target.value, validationType)}
        />
      )}
      <StyledMessageError errorMessage={errorMessage}>
        {errorMessage}
      </StyledMessageError>
    </StyledFormInput>
  );
};

export default TextFormContainer;
