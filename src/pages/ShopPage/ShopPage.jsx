import React from 'react';
import {Route} from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage.jsx';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import {firestore, transformCollectionToMap} from '../../firebase/firebase.utils';
import {updateShopData} from '../../reducers/actions';
import {connect} from 'react-redux';

class ShopPage extends React.Component{
  unsubscribe = null;

  componentDidMount(){
    const {upgradeShopData} = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(collection => {
       const map = transformCollectionToMap(collection.docs);
      //  console.log(map);
    })
  }
  render(){
    const {match} = this.props;
    return(
      <div className='shop-page'>
        <Route exact path= {`${match.path}`} component ={CollectionOverview}/>
        <Route path = {`${match.path}/:collectionName`} component={CollectionPage}/>
      </div>
    )
  }
}
 
const mapDispatchToProps = dispatch =>({
  upgradeShopData: collection => dispatch(updateShopData(collection))
});

export default connect(null, mapDispatchToProps)(ShopPage);