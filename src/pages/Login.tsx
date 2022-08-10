import { useState } from "react";
import { useForm } from "react-hook-form";

import Header from "../components/Header";
import { Container } from "../components/Container";

import styled from "styled-components";

type FormValues = {
  email: string;
  password: string;
  handleSubmit: () => void;
};

type CheckboxProps = {
  labelText: string;
  id: string;
  toggle: () => void;
};

const Title = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #1f1f1f;
  margin: 0 0 10px 0;
`;

const InputLogin = styled.input`
  width: 600px;
  height: 20px;
  padding: 20px;
  border: none;
  outline: 0;
  font-weight: 400;
  font-size: 16px;
  color: #232323;
  background-color: #f5f5f5;
  margin: 0 0 20px 0;
`;

const InputPassword = styled(InputLogin).attrs({
  type: "password",
})``;

const Button = styled.button`
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  background-color: #4a67ff;
  border-radius: 8px;
  border: none;
  width: 640px;
  height: 60px;
  cursor: pointer;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  label {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    color: #1f1f1f;
    cursor: pointer;
    user-select: none;
  }
  input {
    opacity: 0;
    position: absolute;
    cursor: pointer;
  }
  input:checked {
    & + label::after {
      position: absolute;
      content: "";
      margin-left: 4px;
      width: 14px;
      height: 14px;
      background-color: #4a67ff;
      border-radius: 2px;
    }
  }

  label::before {
    content: "";
    margin-right: 14px;
    width: 20px;
    height: 20px;
    border: 1px solid #000000;
    border-radius: 4px;
  }
`;
const Checkbox: React.FC<CheckboxProps> = ({ toggle, labelText, id }) => (
  <CheckboxContainer>
    <input onClick={toggle} type="checkbox" id={id} />
    <label htmlFor={id}>{labelText}</label>
  </CheckboxContainer>
);

const Login: React.FC = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormValues>();
  const [checked, setChecked] = useState(false);
  console.log(checked);

  const toggleChecked = () => {
    checked ? setChecked(false) : setChecked(true);
  };
  const onSubmit = (data: {}) => {
    console.log(data);
  };

  return (
    <Container>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Логин</Title>
        <InputLogin
          style={errors.email && { marginBottom: "8px" }}
          {...register("email", {
            required: "Обязательное поле",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message:
                "Введенное значение не соответствует формату электронной почты",
            },
          })}
        ></InputLogin>
        <div style={{ color: "#E26F6F", marginBottom: "20px" }}>
          {errors?.email?.message}
        </div>
        <Title>Пароль</Title>
        <InputPassword
          style={errors.password && { marginBottom: "8px" }}
          {...register("password", { required: "Обязательное поле" })}
        ></InputPassword>
        <div style={{ color: "#E26F6F", marginBottom: "20px" }}>
          {errors?.password?.message}
        </div>
        <Checkbox
          toggle={toggleChecked}
          id="checkbox"
          labelText={"Запомнить пароль"}
        />
        <Button type="submit">Войти</Button>
      </form>
    </Container>
  );
};

export default Login;
