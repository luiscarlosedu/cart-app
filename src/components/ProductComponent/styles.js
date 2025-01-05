import styled from "styled-components/native";

export const ItemView = styled.View`
    width: 49%;
    background-color: #f2f2f2;
    height: 200px;
    justify-content: space-between;
    border-radius: 8px;
`;

export const ItemImage = styled.Image`
    width: 100%;
    background-color: red;
    height: 45%;
    border-radius: 8px 8px 0px 0px;
`;

export const ItemViewContent = styled.View`
    height: 40%;
    padding: 6px;
    gap: 4px;
`;

export const ItemTitle = styled.Text`
    font-family: 'Inter_600SemiBold';
`;

export const ItemPrice = styled.Text``;

export const ItemViewCartBtn = styled.View`
    height: 15%;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const ItemCartBtn = styled.TouchableOpacity`
    width: 100%;
    height: 30px;
    flex-direction: row;
    justify-content: center; 
    align-items: center; 
    background-color: #1D1D2E; 
    border-radius: 0px 0px 8px 8px; 
    gap: 8px; 
`;

export const ItemCartBtnText = styled.Text`
    color: white;
    font-family: 'Inter_600SemiBold';
    font-size: 12px;
`;


// inter_900Black,
//         Inter_100Thin,
//         Inter_200ExtraLight,
//         Inter_300Light,
//         Inter_400Regular,
//         Inter_500Medium,
//         Inter_600SemiBold,
//         Inter_700Bold,
//         Inter_800ExtraBold