import React, { useState } from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/preview-collection/CollectionPreview';

function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
}

export default ShopPage;
