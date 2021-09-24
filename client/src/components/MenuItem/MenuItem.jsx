import React from 'react';
import '../../styles/MenuItem.scss';
import {withRouter} from 'react-router-dom';

import {MenuItemContainer, BackgroundImage, Content, Title, Subtitle} from './MenuItemStyles';

const MenuItem = (props) => {
  // props match and history are injected by the hoc withRouter
  const {title, imageUrl, size, path, history, match} = props;
  return (
    <MenuItemContainer size = {size}
        onClick={() => history.push(`${match.url}${path}`)}  
    >
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      > 
      </BackgroundImage>
      <Content>
        <Title>{title}</Title>
        <Subtitle>Shop Now</Subtitle>
      </Content>
    </MenuItemContainer>
  )
}

export default withRouter(MenuItem);