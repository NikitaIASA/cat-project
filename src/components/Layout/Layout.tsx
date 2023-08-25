import { FC } from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../SideMenu";
import Container from "../Container";
import AppBar from "../AppBar";

import "./Layout.scss";

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  return (
    <>
      <Container>
        <SideMenu />
        <main className="main">
          <AppBar />
          <Outlet />
        </main>
      </Container>
    </>
  );
};
