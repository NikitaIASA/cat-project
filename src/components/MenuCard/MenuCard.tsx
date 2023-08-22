import { FC } from "react";
import {useLocation, NavLink } from "react-router-dom";

import "./MenuCard.scss";

interface MenuCardProps {
  image: string;
  link: string;
  bgColor: string;
}

export const MenuCard: FC<MenuCardProps> = ({ image, link, bgColor }) => {
  const location = useLocation();
  const isActive = location.pathname === `/${link}`;

  return (
    <div className="menu-card">
      <div className="menu-card__image-block" style={{ background: bgColor }}>
        <img className="menu-card__image" src={image} alt={link} />
      </div>
      <NavLink
        className={`menu-card__link ${isActive ? "active" : ""}`}
        to={`/${link}`}
      >
        {link}
      </NavLink>
    </div>
  );
};
