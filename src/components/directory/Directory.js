import React, { useState } from 'react';
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
export default Directory;
