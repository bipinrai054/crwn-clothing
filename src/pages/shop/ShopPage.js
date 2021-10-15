import React, { useState } from 'react';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';

function ShopPage({ collections1 }) {
  const [collections, setCollections] = useState(collections1);
  return (
    <div className='shop-page'>
      <CollectionsOverview />
    </div>
  );
}

export default ShopPage;
