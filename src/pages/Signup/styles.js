import styled from "styled-components/native";

export const KeyboardView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
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
  background: #ffffff;
  margin-bottom: 30px;
  padding: 15px 20px;
  font-size: 20px;
  border-radius: 9px;
  width: 80%;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #c90e0d;
  padding: 15px 20px;
  border-radius: 9px;
  width: 80%;
  margin-bottom: 20px;
`;

export const TextSubmit = styled.Text`
  color: #ffffff;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 21px;
`;
