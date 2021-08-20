import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

export const NavContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  &:hover {
    text-decoration: none;
    color: white;
    background-color: navy;
    border-radius: 10px;
  }
`;

export const LinkBox = styled(Link)`
  ${option}
`;


export const LogoBox = styled(Link)`
  height: 100%;
  width: 50px;
`;

export const  OptionDiv = styled.div`
  ${option}
`;
