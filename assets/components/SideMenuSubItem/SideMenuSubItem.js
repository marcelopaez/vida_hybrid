import React from 'react';
import { Link } from 'react-router-dom';

const SideMenuSubItem = ({ svg, title, link }) => {
  return (
    <Link to={link}>
      <li className="sidebarSubItem">
        {svg && svg}
        <p className="subCategoryTitle">{title}</p>
      </li>
    </Link>
  );
};

export default SideMenuSubItem;
