import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';
import MenuItems from '../menu-items/MenuItems';
import data from './data';
import './Directory.scss';

function Directory() {
  const [sections, setSections] = useState(data);
  return (
    <div className='  directory-menu'>
      {sections.map((section) => {
        return (
          <MenuItems
            key={section.id}
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
            linkUrl={section.linkUrl}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
