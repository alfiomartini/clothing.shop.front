import styled from 'styled-components';

import {InvertedBtn} from '../CustomButton/CustomButtonStyles';

export const CollectionBox = styled.div`
  padding: 20px;

  h1 {
    color:lightgreen;
  }
  h1:hover{
    cursor:pointer;
    color:whitesmoke;
  }
`;

export const Preview = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const PreviewItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 15px;
  min-width: 230px;
  position: relative;
`;

export const Image =  styled.div`
  height: 340px;
  background-size: cover;
  background-position: center;

  &:hover {
    opacity: 0.7;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color:whitesmoke;
`;

export const InvisibleBtn = styled(InvertedBtn)`
  display: none;
  opacity: 0.7;
  position: absolute;
  width: 80%;
  top: 255px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  // this compiles to something like  'PreviewItem:hover InivisibleBtn'
  ${PreviewItem}:hover & {
    display:inline-block;
  }
`;