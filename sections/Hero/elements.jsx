import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20;
  max-width: 1024px;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  text-align: center;
  color: black;
  padding-top: 10%;
  display: inline-block;
  flex-direction: row;
  font-size: 35px;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  padding-bottom: 5%;
  margin-top: -5px;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  flex-direction: row;
  text-align: center;
`;

export const StyledBox = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
export const StyledBoxText = styled(({ ...props }) => <div {...props} />)`
  width: 300px !important;
  overflow: contain;
  font-family: Georgia, serif;
  font-size: 16px;
`;
export const StyledBoxImg = styled(({ ...props }) => <div {...props} />)``;
