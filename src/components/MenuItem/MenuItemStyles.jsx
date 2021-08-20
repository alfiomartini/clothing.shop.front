import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  min-width: 330px;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover{
    cursor: pointer;
  }
`;

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat; 
  background-size: cover;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }
`;


export const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  &:hover {
    opacity:0.9;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  text-transform: uppercase;
`;
