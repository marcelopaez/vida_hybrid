import React from 'react';
import { Link } from 'react-router-dom';

const SideMenuItem = ({ svg, svgHover, title, link }) => {
  return (
    <Link to={link}>
      <li className={`${window.document.documentURI.includes(link) ? 'sidebarItemCurrentlySelected' : 'sidebarItem'}`}>
        <div className="sidebarItemNormal">{svg}</div>
        <div className="sidebarItemHover">{svgHover}</div>
        <p className="categoryTitle">{title}</p>
      </li>
    </Link>
  );
};

export default SideMenuItem;
