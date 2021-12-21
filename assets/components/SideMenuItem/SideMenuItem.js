import React from 'react';
import { Link } from 'react-router-dom';

const SideMenuItem = ({ svg, title, link }) => {
  return (
    <Link to={link}>
      <li className={`${window.document.documentURI.includes(link) ? 'sidebarItemCurrentlySelected' : 'sidebarItem'}`}>
        {svg}
        <p className="categoryTitle">{title}</p>
      </li>
    </Link>
  );
};

export default SideMenuItem;
