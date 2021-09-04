import React from 'react';
import {Route} from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage.jsx';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
// import {firestore, transformCollectionToMap} from '../../firebase/firebase.utils';
import {updateCollectionAsync} from '../../reducers/actions';
import {connect} from 'react-redux';

class ShopPage extends React.Component{
  

  componentDidMount(){
    const {updateCollectionAsync} = this.props;
    updateCollectionAsync()
    // const {upgradeShopData} = this.props;
    // const collectionRef = firestore.collection('collections');
    // using the observer/observable pattern 
    // as long as we do not visit this page, our collections data
    // is not updated in the redux store. So we need to move this
    // to some other place.
    // collectionRef.onSnapshot(collection => {
    //   const map = transformCollectionToMap(collection.docs);
    //   //  console.log(map);
    //   upgradeShopData(map)
    // })
    // the code above could be implemented using promises:
    // https://firebase.google.com/docs/firestore/query-data/get-data
    // collectionRef.get()
    // .then(collection => {
    //   const map = transformCollectionToMap(collection.docs);
    //   upgradeShopData(map)
    // })
    // .catch(error => console.log('error in shop page collection', error));
  }
  

  render(){
    // A match object contains information about how a <Route path> matched the URL
    // https://reactrouter.com/web/api/match
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
  // upgradeShopData: collection => dispatch(updateShopData(collection))
  updateCollectionAsync: () => dispatch(updateCollectionAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);