import React, { useState } from "react";
import { setItemAsync } from "expo-secure-store";
import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonTitle,
  SubTitle,
  ButtonSubmit,
  TextSubmit,
} from "./styles";
import Header from "../../components/Header";
import api from "../../services/api";

async function saveToken(value) {
  await setItemAsync("token", value);
}

function Signin({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const voltar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Welcome" }],
    });
  };
  const entrar = async () => {
    if (email && password) {
      try {
        const login = await api.post("login", {
          email,
          password,
        });
        if (login.data?.token) {
          saveToken(login.data.token);
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        } else {
          window.alert(login.data.msg);
        }
      } catch {
        window.alert("E-mail ou senha incorreto");
      }
    } else {
      window.alert("Digite email e senha para entrar");
    }
  };

  return (
    <KeyboardView>
      <Header />
      <Container>
        <Title>Entrar em sua conta</Title>
        <Input
          placeholderTextColor="#919191"
          placeholder="E-mail"
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          placeholderTextColor="#919191"
          placeholder="Senha"
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
        />
        <ButtonTitle>
          <SubTitle>Esqueceu a senha?</SubTitle>
        </ButtonTitle>
        <ButtonSubmit title="Entrar" onPress={() => entrar()}>
          <TextSubmit>Entrar</TextSubmit>
        </ButtonSubmit>
        <ButtonSubmit title="Voltar" onPress={() => voltar()}>
          <TextSubmit>Voltar</TextSubmit>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default Signin;
