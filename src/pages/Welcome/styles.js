import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
`;

export const Title = styled.Text`
    top: 15%;
    color: #9C0000;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 64px;
    text-align: center;
    text-transform: uppercase;
    width: 50%;
`;

export const Image = styled.Image`
    border-radius: 9px;
`;

export const Container = styled.View`
    margin-top:30px;
    flex: 1;
    background-color: #F2F2F2;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    width: 90%;
    border-radius: 50px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #C90E0D;
    padding: 15px 20px;
    border-radius: 9px;
    width: 80%;
    margin-bottom: 30px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    background-color: #FFFFFF;
    padding: 15px 20px;
    border-radius: 9px;
    width: 80%;
    margin-bottom: 30px;
    border: 1px solid #A1A1A1;
`;

export const TextSubmit = styled.Text`
    color: #FFFFFF;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 21px;
    text-transform: uppercase;
`;

export const TextLogin = styled.Text`
    color: #000000;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 21px;
    text-transform: uppercase;
`;