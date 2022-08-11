import styled from "styled-components";
import { Link } from "react-router-dom";

import Header from "../components/Header";

const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  color: #000000;
  text-align: center;
  margin-bottom: 50px;
  b {
    font-weight: 700;
  }
`;
const Button = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 60px;
  background-color: #f5f5f5;
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
  color: #000000;
  border: none;
  cursor: pointer;
`;

const Profile: React.FC = () => {
  return (
    <>
      <Header />
      <Title>
        Здравствуйте, <b>steve.jobs@example.com</b>
      </Title>
      <Link style={{ textDecoration: "none" }} to="/">
        <Button>Выйти</Button>
      </Link>
    </>
  );
};

export default Profile;
