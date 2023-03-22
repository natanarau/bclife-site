import styled from "styled-components";
import { Box } from "@mui/material";

export const Session = styled(Box) `
    display: flex;
    justify-content: space-between;
    gap: 35px;
    margin-top: 50px;
`

export const Wrapper = styled(Box) `
  display: grid;
  gap: 30px;
  align-items: flex-start;
`;

export const content = styled(Box) `
    display: grid;
    gap: 10px;
    align-content: center;
`

export const title = styled.h2 `
    font-size: 1.5em;
    margin: 10px 0;
    font-weight: 400;
`

export const description = styled.p `
    letter-spacing: 3px;
    line-height: 25px;
    margin: 0;
`

export const Logo = styled.img `
    width: 200px;
`

