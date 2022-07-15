import React, { useState } from 'react';
import { 
    KeyboardView, 
    Title, 
    Container, 
    Input,
    ButtonTitle,
    SubTitle, 
    ButtonSubmit, 
    TextSubmit 
} from './styles';
import Header from '../../components/Header';

function Signup({navigation}) {

    const [name, setName] = useState(null)
    const [lastname, setLastname] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [password, setPassword] = useState(null)
    const [repeatPassword, setRepeatPassword] = useState(null)

    const voltar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Welcome"}]
        })
    }
    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Home"}]
        })
    }
    return (
        <KeyboardView>
            <Header />
            <Container>
                <Title>Entrar em sua conta</Title>
                <Input 
                    placeholderTextColor="#919191"
                    placeholder="Primeiro nome"
                    onChangeText={value => setName(value)}
                />
                <Input 
                    placeholderTextColor="#919191"
                    placeholder="Sobrenome"
                    onChangeText={value => setLastname(value)}
                />
                <Input 
                    placeholderTextColor="#919191"
                    placeholder="E-mail"
                    onChangeText={value => setEmail(value)}
                />
                <Input 
                    placeholderTextColor="#919191"
                    placeholder="Telefone"
                    onChangeText={value => setPhoto(value)}
                />
                <Input 
                    placeholderTextColor="#919191"
                    placeholder="Senha"
                    onChangeText={value => setPassword(value)}
                    secureTextEntry={true}
                />
                <Input 
                    placeholderTextColor="#919191"
                    placeholder="Repetir senha"
                    onChangeText={value => setRepeatPassword(value)}
                    secureTextEntry={true}
                />
                <ButtonSubmit title="Entrar" onPress={() => entrar()}>
                    <TextSubmit>Cadastrar</TextSubmit>
                </ButtonSubmit>
                <ButtonSubmit title="Voltar" onPress={() => voltar()}>
                    <TextSubmit>Voltar</TextSubmit>
                </ButtonSubmit>
            </Container>
        </KeyboardView>
    )
}

export default Signup;