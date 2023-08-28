import React from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "./routes";

import "./Navigation.scss";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {routes.map((link) => (
          <li key={link.id}>
            <Link
              className={`navigation__link ${
                location.pathname === link.link ? "active" : ""
              }`}
              to={link.link}
            >
              <img
                className="navigation__image"
                src={link.image}
                alt={link.link}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
