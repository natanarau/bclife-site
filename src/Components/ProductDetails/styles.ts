import { Box } from "@mui/system";
import styled from "styled-components";

export const Session = styled(Box)`
  display: grid;
  gap: 30px;
  margin: 50px 10px;
`;

export const Wrapper = styled(Box)`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  @media only screen and (max-width: 650px) {
    justify-content: center  
  }
`;

export const Title = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
  font-weight: 400;
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
`;

export const Description = styled.p`
  margin: 0;
`;

export const ValueProduct = styled.h4`
  margin: 0;
  color: #274f15;
  font-size: 16px;
  font-weight: 600;
`;

export const ImgProduct = styled.img`
  max-height: 300px;
`;

export const HiperLink = styled.a `
  text-decoration: none;
  color: initial;
`
