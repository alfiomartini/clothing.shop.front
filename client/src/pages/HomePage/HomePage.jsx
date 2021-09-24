import React from 'react';
import MenuList from '../../components/MenuList/MenuList.jsx';
import {HomePageContainer} from  './HomePageStyles';

const HomePage = (props) => {
  return (
    <HomePageContainer>
        <MenuList  />
    </HomePageContainer>
  )
}

export default HomePage;