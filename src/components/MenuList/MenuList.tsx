import { FC } from "react";
import MenuCard from "../MenuCard";
import { data } from "./Data";

import "./MenuList.scss";

interface MenuListProps {}

export const MenuList: FC<MenuListProps> = () => {
  return (
    <div className="menu-list">
      {data && data.map((card) => <MenuCard key={card.id} {...card} />)}
    </div>
  );
};
