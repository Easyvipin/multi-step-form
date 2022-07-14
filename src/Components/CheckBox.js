import React from "react";
import { useState } from "react";
import styled from "styled-components";
import colors from "@app/themes/colors";
import fonts from "@app/themes/fonts";
import media from "@app/themes/media";

const CheckBoxContainer = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  border: 0.12rem solid
    ${(props) => (props.active ? "#9684ec" : colors.optionalText)};
  border-radius: 0.3rem;
  margin: 1rem;
  input {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
    border: 2px solid black;
  }

  ${media.lessThan("mobile")`
    width:12rem;
    height:6rem;
  `}
  transition: border 0.2s ease-in;
`;
const CheckBoxContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 1rem;
  h6 {
    margin: 0.1rem 0rem;
    font-size: ${fonts.size.small};
    font-weight: ${fonts.weight.semiBold};
    color: ${colors.headline};

    ${media.lessThan("mobile")`
    font-size: ${fonts.size.mobileSmall};
  `}
  }
  p {
    font-size: ${fonts.size.small};
    font-weight: ${fonts.weight.regular};
    color: ${colors.subHeadline};

    ${media.lessThan("mobile")`
    font-size: ${fonts.size.mobileSmall};
  `}
  }
`;
const StyledImg = styled.img`
  width: 2.6rem;
  height: 2.6rem;

  ${media.lessThan("mobile")`
  width: 1.5rem;
  height: 1.5rem;
  `}
`;

const CheckBox = ({
  value,
  id,
  checkBoxRef,
  title,
  desc,
  iconSrc,
  defaultActive = false,
}) => {
  const handleChange = () => {
    setActive(!active);
  };
  const [active, setActive] = useState(defaultActive);

  return (
    <CheckBoxContainer active={active}>
      <input
        type="checkbox"
        value={value}
        checked={active}
        id={id}
        onChange={handleChange}
        ref={checkBoxRef}
      />
      <CheckBoxContent>
        <StyledImg src={iconSrc} alt="" />
        <h6>{title}</h6>
        <p>{desc}</p>
      </CheckBoxContent>
    </CheckBoxContainer>
  );
};

export default CheckBox;
