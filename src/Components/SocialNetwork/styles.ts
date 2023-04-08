import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  display: grid;
  position: fixed;
  z-index: 999;
  margin: 20px;
  top: 50%;
  @media only screen and (max-width: 600px) {
    top: 80%;
  }
`;

export const HiperLink = styled.a`
  text-decoration: none;
  transition: 0.3s;
  padding: 10px;
  &:hover {
    opacity: 80%;
  }
`;
