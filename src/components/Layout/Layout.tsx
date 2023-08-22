import { FC } from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../SideMenu";
import Container from "../Container";

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  return (
    <>
      <Container>
        <SideMenu />
        <main className="main">
          <Outlet />
        </main>
      </Container>
    </>
  );
};
