import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  gap: 20px;
`;

export const Notice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #9ee384;
  font-size: 12px;
  font-weight: 600;
  color: #141414;
  letter-spacing: 3px;
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ul {
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;
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
`;

export const Logo = styled.img `
  width: 130px;
`
