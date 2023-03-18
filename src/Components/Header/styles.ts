import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
`;

export const Notice = styled(Box)`
  display: flex;
  justify-content: center;
  background-color: #9ee384;
  font-size: 12px;
  font-weight: 600;
  color: #141414;
  letter-spacing: 3px;
  padding: 5px;
  p {
    text-align: center;
  }
`;

export const MenuHeader = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 10px;
  position: relative;
  ul {
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;
    @media only screen and (max-width: 600px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
      margin-top: 25px;
      order: 2;
      gap: 15px;
    }
  }
  li {
    list-style-type: none;
    padding: 5px;
    font-size: 14px;
    a {
      text-decoration: none;
      color: #141414;
      transition: 0.3s;
      &:hover {
        opacity: 50%;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: 130px;
`;

export const BoxMenuResponse = styled(Box)<{ visible: boolean }>`
  display: none;
  transition: 0.5s;
  opacity: ${(props) => (props.visible ? "initial" : "0")};
  width: 100%;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    display: grid;
    background-color: #cdfabb;
    position: absolute;
    height: 400px;
    top: 25px;
  }
`;

export const MenuDesktop = styled(Box)`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const BoxMenuIcon = styled(Box)`
  display: none;
  z-index: 999;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;
