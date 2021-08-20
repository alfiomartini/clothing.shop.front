import React from 'react';
import {Route} from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage.jsx';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';

const ShopPage = (props) => {
    // console.log('shop page props', props);
    const {match} = props;
    return(
      <div className='shop-page'>
        <Route exact path= {`${match.path}`} component ={CollectionOverview}/>
        <Route path = {`${match.path}/:collectionName`} component={CollectionPage}/>
      </div>
    )
  }


export default ShopPage;