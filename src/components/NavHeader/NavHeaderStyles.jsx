import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

export const NavContainer = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border:1px solid black;
  margin:10px;
`;

export const Options = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 20px;
`;

const option = css`
  padding: 8px 15px;
  text-decoration: none;
  color:whitesmoke;

  &:hover {
    text-decoration: none;
    color: black;
    background-color: whitesmoke;
    border-radius: 10px;
  }
`;

export const LinkBox = styled(Link)`
  ${option}
`;


export const LogoBox = styled(Link)`
  height: 100%;
  width: 300px;
  text-decoration:none;
   
  h2 {
    color:lightgreen;
  }
`;

export const  OptionDiv = styled.div`
  ${option}
`;
