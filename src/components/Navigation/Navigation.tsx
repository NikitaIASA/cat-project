import { FC } from "react";
import { Link } from "react-router-dom";
import { routes } from "./routes";

import "./Navigation.scss";

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {routes.map((link) => (
          <li key={link.id}>
            <Link className="navigation__link" to={link.link}>
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
