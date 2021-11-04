import React from 'react';
import { Link } from 'react-router-dom';

const SideMenuItem = ({ svg, title, link }) => {
  return (
    <li className="sidebarItem">
      {svg}
      <Link to={link}>
        <p className="categoryTitle">{title}</p>
      </Link>
    </li>
  );
};

export default SideMenuItem;
