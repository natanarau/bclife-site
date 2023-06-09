import { Box } from "@mui/material";
import styled from "styled-components";

export const Session = styled(Box)`
  margin: 50px 10px;
`;

export const Content = styled(Box)`
  display: flex;
  gap: 20px;
  justify-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  @media only screen and (max-width: 875px) {
    justify-content: space-around;
  }
  @media only screen and (max-width: 596px) {
    justify-content: center;
  }
`;

export const Wrapper = styled(Box)`
  display: grid;
  justify-items: center;
  gap: 10px;
  width: 100%;
  max-width: 280px;
`;

export const Title = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
  font-weight: 400;
`;

export const imgProduct = styled.img`
  height: 200px;
`;

export const NameProduct = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
`;
