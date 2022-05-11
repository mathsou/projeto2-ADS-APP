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

function Signin({navigation}) {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Welcome"}]
        })
    }

    return (
        <KeyboardView>
            <Header />
            <Container>
                <Title>Entrar em sua conta</Title>
                <Input 
                    placeholderTextColor="#919191"
                    placeholder="E-mail"
                    onChangeText={value => setEmail(value)}
                />
                <Input 
                    placeholderTextColor="#919191"
                    placeholder="Senha"
                    onChangeText={value => setPassword(value)}
                    secureTextEntry={true}
                />
                <ButtonTitle>
                    <SubTitle>Esqueceu a senha?</SubTitle>
                </ButtonTitle>
                <ButtonSubmit title="Entrar" onPress={() => entrar()}>
                    <TextSubmit>Entrar</TextSubmit>
                </ButtonSubmit>
                <ButtonSubmit title="Voltar" onPress={() => entrar()}>
                    <TextSubmit>Voltar</TextSubmit>
                </ButtonSubmit>
            </Container>
        </KeyboardView>
    )
}

export default Signin;