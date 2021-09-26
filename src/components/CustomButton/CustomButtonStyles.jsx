import styled, {css} from 'styled-components';

const basicButton = css`
  // min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

export const CustomBtn = styled.button`
  ${basicButton};
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const InvertedBtn = styled.button`
  ${basicButton};
  background-color: white;
  color: black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const GoogleBtn = styled.button`
  ${basicButton};
  background-color: blue;
  color: white;

  &:hover {
    background-color: white;
    color: blue;
    border: 1px solid blue;
  }
`;
