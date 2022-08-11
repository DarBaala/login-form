import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";

import AppContext from "../context";

import Header from "../components/Header";

import { EmailState } from "./Login";

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
  const { email } = useContext<EmailState>(AppContext);
  return (
    <>
      <Header />
      <Title>
        Здравствуйте, <b>{email}</b>
      </Title>
      <Link style={{ textDecoration: "none" }} to="/">
        <Button>Выйти</Button>
      </Link>
    </>
  );
};

export default Profile;
