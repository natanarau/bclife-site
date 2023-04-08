import { Box } from "@mui/material";
import styled from "styled-components";

export const Whapper = styled(Box)`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 1090px;
  width: 100%;
  @media only screen and (max-width: 600px) {
    font-size: 70%;
  }
  @media only screen and (max-width: 400px) {
    font-size: 50%;
  }
  @media only screen and (max-width: 980px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const BannerImg = styled.img`
  max-width: 800px;
  width: 100%;
  @media only screen and (max-width: 980px) {
    order: 2;
  }
`;

export const BoxTexts = styled(Box)`
  position: absolute;
  right: 0;
  @media only screen and (max-width: 980px) {
    position: relative;
  }
`;

export const TitleBanner = styled.h1`
  font-size: 4em;
  color: #18230b;
  font-weight: 400;
  margin: 0;
  span {
    color: #71831a;
    font-weight: 600;
  }
`;

export const DescriptionBanner = styled.h2`
  letter-spacing: 2px;
  color: #18230b;
  font-weight: 400;
  margin: 0;
`;
