import React from 'react';
import {connect} from 'react-redux';

import MenuItem from '../MenuItem/MenuItem';
import {MenuContainer} from './MenuListStyles';

import {selectSections} from '../../reducers/selectors';


const MenuList = ({sectionsList}) => {
  const menuList = sectionsList.map(item => {
    const {id, title, imageUrl, size, path} = item;
    return <MenuItem  key = {id} title={title} 
              imageUrl={imageUrl} size={size}
              path={path}/>
  })
  return <MenuContainer> {menuList} </MenuContainer> 
}

const mapStateToProps = state => ({
   sectionsList: selectSections(state)
});
export default connect(mapStateToProps)(MenuList);