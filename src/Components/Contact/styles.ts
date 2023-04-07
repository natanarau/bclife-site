import styled from "styled-components";
import { Box } from "@mui/material";

export const Session = styled(Box)`
  display: grid;
  justify-items: center;
  gap: 35px;
  margin: 50px 10px;
`;

export const Content = styled(Box)`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
`;

export const Wrapper = styled(Box)`
  display: grid;
  gap: 30px;
  align-content: flex-start;
  width: 100%;
  max-width: 350px;
`;

export const Title = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
  font-weight: 400;
`;

export const Description = styled.p`
  letter-spacing: 3px;
  line-height: 25px;
  margin: 0;
`;

export const Logo = styled.img`
  width: 200px;
`;
