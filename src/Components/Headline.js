import React from "react";
import styled from "styled-components";
import colors from "@app/themes/colors";
import fonts from "@app/themes/fonts";
import media from "@app/themes/media";

const HeadlineContainer = styled.div`
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.semiBold};
  color: ${colors.headline};
  text-align: center;
  ${media.lessThan("mobile")`
   font-size:${fonts.size.mobileMedium}
  `}
`;
const SubHeadlineContainer = styled.div`
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.medium};
  color: ${colors.subHeadline};
  text-align: center;
  margin-top: 0.7rem;
  ${media.lessThan("mobile")`
   font-size:${fonts.size.mobileSmall}
  `}
`;

const Headline = ({ headline, subHeadline }) => {
  return (
    <div>
      <HeadlineContainer>{headline}</HeadlineContainer>
      <SubHeadlineContainer>{subHeadline}</SubHeadlineContainer>
    </div>
  );
};

export default Headline;
