import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: 45px;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const Perfil = styled.View`
    flex-direction: row;
    gap: 10px;
    width: 50%;
`;

export const ImgBox = styled.View`
    width: 50px;
    height: 50px;
    background-color: #7e33f7;
    border-radius: 35%;
`;

export const PerfilBox = styled.View`
    justify-content: center;
`;

export const Name = styled.Text`
    font-family: 'Inter_600SemiBold';
`;

export const ProfName = styled.Text`

`;


export const About = styled.View`
    
`;


export const AskButton = styled.TouchableOpacity`
    background-color: #f3f3f3;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 35%;
`;

/*
ImgBox,
    PerfilBox,
    Name,
    ProfName
*/