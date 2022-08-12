import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import AppContext from "../context";

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

type AuthType = {
  email: string;
  password: string;
};

export type EmailState = {
  email?: string;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
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
  border-radius: 8px;
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

const LoginFailed = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 598px;
  height: 18px;
  background-color: #f5e9e9;
  border: 1px solid #e26f6f;
  border-radius: 8px;
  margin-bottom: 27px;
  p {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ffc8c8;
    text-align: center;
    color: #ee6565;
    margin-right: 14px;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    color: #000000;
  }
`;

const Checkbox: React.FC<CheckboxProps> = ({ toggle, labelText, id }) => (
  <CheckboxContainer>
    <input onClick={toggle} type="checkbox" id={id} />
    <label htmlFor={id}>{labelText}</label>
  </CheckboxContainer>
);

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { email, setEmail } = useContext(AppContext);
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormValues>();
  const [checked, setChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorEmail, SetErrorEmail] = useState<boolean>(false);
  const [errorPassword, SetErrorPassword] = useState<boolean>(false);

  console.log(isLoading);

  const toggleChecked = () => {
    checked ? setChecked(false) : setChecked(true);
  };

  const onSubmit = (data: AuthType) => {
    SetErrorEmail(false);
    SetErrorPassword(false);
    setIsLoading(true);
    const proAuth = new Promise<AuthType>((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
    proAuth.then((data) => {
      console.log(data);
      setEmail(data.email);
      if (
        data.email === "steve.jobs@example.com" &&
        data.password === "password"
      ) {
        console.log(email);
        navigate("/profile");
      } else if (data.email !== "steve.jobs@example.com") {
        SetErrorEmail(true);
      } else if (data.password !== "password") {
        SetErrorPassword(true);
      }
      setIsLoading(false);
    });
  };

  return (
    <Container>
      <Header />
      {errorEmail ? (
        <LoginFailed>
          <p>!</p>
          <span>Пользователя {email} не существует</span>
        </LoginFailed>
      ) : (
        ""
      )}
      {errorPassword ? (
        <LoginFailed>
          <p>!</p>
          <span>Вы ввели неприавльный пароль!</span>
        </LoginFailed>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Логин</Title>
        <InputLogin
          style={
            errors.email && {
              marginBottom: "8px",
              color: "#E26F6F",
              border: "1px solid #E26F6F",
            }
          }
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
          style={
            errors.password && {
              marginBottom: "8px",
              color: "#E26F6F",
              border: "1px solid #E26F6F",
            }
          }
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
        <Button
          disabled={isLoading}
          style={
            isLoading
              ? {
                  backgroundColor: "#99A9FF",
                }
              : {}
          }
          type="submit"
        >
          Войти
        </Button>
      </form>
    </Container>
  );
};

export default Login;
