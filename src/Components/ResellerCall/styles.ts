import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Box)`
    display: grid;
    justify-items: center;
    margin: 10px;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 400;
  letter-spacing: 4px;
  margin: 50px 10px;
  text-align: center;
`;

export const Description = styled.p `
    font-size: 18px;
    line-height: 28px;
    text-align: center;
`

export const Video = styled.video`
  max-width: 800px;
  width: 100%;
  margin: 10px;
`;

export const HiperLink = styled.a`
  text-decoration: none;
  color: #18230b;
  transition: 0.3s;
  background-color: #9ee384;
  width: 250px;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  &:hover {
    opacity: 90%;
  }
`;

