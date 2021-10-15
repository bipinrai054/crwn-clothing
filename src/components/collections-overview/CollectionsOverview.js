import React from 'react';
import './CollectionsOverview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../preview-collection/CollectionPreview';
import { selectCollections } from '../../redux/shop/shopSelectors';

function CollectionsOverview({ collections1 }) {
  return (
    <div className='collections-overview'>
      {collections1.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections1: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
