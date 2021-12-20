import React from 'react';
import { Link } from 'react-router-dom';

const SideMenuSubItem = ({ title }) => {
  return (
    <li className="sidebarSubItem">
      <p className="subCategoryTitle">{title}</p>
    </li>
  );
};

export default SideMenuSubItem;
