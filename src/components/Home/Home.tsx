import { FC } from "react";
import Container from "../Container";
import bg from "../../assets/girl-and-pet.png";

import "./Home.scss";

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <Container>
      <div className="home">
        <img className="home__background" src={bg} alt="" />
      </div>
    </Container>
  );
};
