import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #F2F2F2;
`;

export const Title = styled.Text`
    font-size: 27px;
    color: #000000;
    margin-bottom: 30px;
    font-weight: bold;
`;

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    width: 90%;
`;

export const ButtonTitle = styled.TouchableOpacity`
    left: 20%;    
`;

export const SubTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-top: -20px;
    margin-bottom: 25px;
`;

export const Input = styled.TextInput`
    background: #FFFFFF;
    margin-bottom: 30px;
    padding: 15px 20px;
    font-size: 20px;
    border-radius: 9px;
    width: 80%;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #C90E0D;
    padding: 15px 20px;
    border-radius: 9px;
    width: 80%;
    margin-bottom: 20px;
`;

export const TextSubmit = styled.Text`
    color: #FFFFFF;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 21px;
`;