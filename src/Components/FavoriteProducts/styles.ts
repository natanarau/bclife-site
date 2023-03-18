import { Box } from "@mui/material";
import styled from "styled-components";

export const Session = styled(Box)`
  display: grid;
`;

export const Whapper = styled(Box)`
  display: grid;
  justify-content: center;
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

export const Content = styled(Box)`
  display: flex;
  gap: 20px;
  @media only screen and (max-width: 850px) {
    display: grid;
    justify-items: center;
    [data-id="product-2"] {
      order: 2;
    }
  }
`;

export const ContentImg = styled.img`
  max-width: 400px;
`;

export const ContentTitle = styled.h2`
  font-size: 2em;
  font-weight: 400;
  letter-spacing: 3px;
`;

export const ContentDescription = styled.p`
  font-size: 1em;
  letter-spacing: 1px;
  line-height: 25px;
`;
