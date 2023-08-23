import { FC } from "react";
import Search from "../Search";
import Navigation from "../Navigation";

import "./AppBar.scss";

interface AppBarProps {}

export const AppBar: FC<AppBarProps> = () => {
  return (
    <div className="appbar">
      <Search />
      <Navigation />
    </div>
  );
};
