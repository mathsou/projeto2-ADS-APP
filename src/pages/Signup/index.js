import React, { useState } from "react";
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

function Signup({ navigation }) {
  const [name, setName] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);

  const voltar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Welcome" }],
    });
  };
  const cadastrar = async () => {
    if (name && lastname && email && phone && password && repeatPassword) {
      if (password === repeatPassword) {
        try {
          await api.post("register", {
            first_name: name,
            last_name: lastname,
            email,
            password,
            phone,
          });
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        } catch (err) {
          window.alert("Erro ao cadastrar");
        }
      } else {
        window.alert("As senhas devem ser iguais");
      }
    } else {
      window.alert("Preencha todos os campos");
    }
  };
  return (
    <KeyboardView>
      <Header />
      <Container>
        <Title>Entrar em sua conta</Title>
        <Input
          placeholderTextColor="#919191"
          placeholder="Primeiro nome"
          onChangeText={(value) => setName(value)}
        />
        <Input
          placeholderTextColor="#919191"
          placeholder="Sobrenome"
          onChangeText={(value) => setLastname(value)}
        />
        <Input
          placeholderTextColor="#919191"
          placeholder="E-mail"
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          placeholderTextColor="#919191"
          placeholder="Telefone"
          onChangeText={(value) => setPhone(value)}
        />
        <Input
          placeholderTextColor="#919191"
          placeholder="Senha"
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
        />
        <Input
          placeholderTextColor="#919191"
          placeholder="Repetir senha"
          onChangeText={(value) => setRepeatPassword(value)}
          secureTextEntry={true}
        />
        <ButtonSubmit title="Entrar" onPress={() => cadastrar()}>
          <TextSubmit>Cadastrar</TextSubmit>
        </ButtonSubmit>
        <ButtonSubmit title="Voltar" onPress={() => voltar()}>
          <TextSubmit>Voltar</TextSubmit>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default Signup;
