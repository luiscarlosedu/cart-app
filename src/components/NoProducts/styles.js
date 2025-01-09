import styled from "styled-components/native";

export const Container = styled.View`
    flex: 2.5;
    align-items: center;
`;

export const NoProductsContent = styled.View`
    width: 60%;
    gap: 10px;
`;

export const NoProductsText = styled.Text`
    text-align: center;
`;

export const GoToHomeButton = styled.TouchableOpacity`
    background-color: red;
    padding: 5px 10px;
    border-radius: 3px;
    background-color: #7e33f7;
`;

export const GoToHomeButtonText = styled.Text`
    color: white;
    font-family: 'Inter_600SemiBold';
    text-align: center;
`;