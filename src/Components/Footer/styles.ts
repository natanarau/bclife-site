import { Box } from "@mui/material";
import styled from "styled-components";

export const Session = styled(Box)`
  display: grid;
`;

export const Wrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #d1edc5;
  padding: 50px;
  gap: 20px;
`;

export const TextH4 = styled.h4`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: initial;
  font-weight: 400;
`;
