import { FC } from "react";
import Container from "../Container";

import "./Home.scss";

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <Container>
      <h1 className="title">
        Hello world
      </h1>
    </Container>
  );
};
