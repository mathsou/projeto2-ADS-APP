import React from 'react';
import { 
    KeyboardView,
    Title,
    Image, 
    Container, 
    ButtonSubmit, 
    TextSubmit,
    ButtonLogin, 
    TextLogin
} from './styles';
import Logo from '../../src/assets/motoboy2.png';

function Preloader({navigation}) {

    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Signin"}]
        })
    }

    return (
        <KeyboardView>
            <Container>
                <Title>Moto Tchê</Title>
                <Image    
                    source={Logo}
                />
            </Container>
            <ButtonSubmit>
                <TextSubmit>Cadastrar</TextSubmit>
            </ButtonSubmit>
            <ButtonLogin title="Entrar" onPress={() => entrar()}>
                <TextLogin>Entrar</TextLogin>
            </ButtonLogin>
        </KeyboardView>
    )
}

export default Preloader;