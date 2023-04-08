import { Box } from "@mui/material";
import styled from "styled-components";

export const Session = styled(Box)`
  display: grid;
  justify-content: center;
  background-color: #cdfabb;
  margin-top: 20px;
  height: 400px;
`;

export const Wrapper = styled(Box)`
  max-width: 1080px;
  .slick-initialized,
  .slick-list {
    max-width: 1000px !important;
  }
  .slick-list {
    width: 1000px !important;
  }

  @media only screen and (max-width: 1024px) {
    .slick-initialized {
      width: 780px !important;
    }
    .slick-list {
      width: 780px !important;
    }
  }
  @media only screen and (max-width: 880px) {
    .slick-initialized {
      width: 550px !important;
    }
    .slick-list {
      width: 550px !important;
    }
  }
  @media only screen and (max-width: 640px) {
    .slick-initialized {
      width: 400px !important;
    }
    .slick-list {
      width: 400px !important;
    }
  }
  @media only screen and (max-width: 480px) {
    .slick-initialized {
      width: 250px !important;
    }
    .slick-list {
      width: 250px !important;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 400;
  letter-spacing: 4px;
  margin: 50px 10px;
  text-align: center;
`;

export const Img = styled.img`
  display: block !important;
  margin: auto !important;
  width: 150px !important;
`;
