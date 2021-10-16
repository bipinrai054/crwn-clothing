import React from 'react';
import { connect } from 'react-redux';
// import CollectionItem from '../../../components/collection-item/CollectionItem';
import { selectCollection } from '../../../redux/shop/shopSelectors';
import './Collection2.scss';

const Collection2 = ({ collection }) => {
  console.log(collection);
  return (
    <div className='collection-page'>
      <h2>Collection PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection2);
