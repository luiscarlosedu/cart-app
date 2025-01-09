import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #f2f2f2;
    height: 100px;
    width: 100%;
    border-radius: 4px;
    justify-content: space-between;
    flex-direction: row;
`;

export const ProductLeftContainer = styled.View`
    width: 50%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const ProductImage = styled.Image`
    width: 50%;
    height: 100%;
    border-radius: 4px 0px 0px 4px;
`;

export const ProductLeftTextContent = styled.View`
    flex-direction: column;
`;

export const ProductTitle = styled.Text`
    font-family: 'Inter_600SemiBold';
    font-size: 14px;
`;

export const ProductPrice = styled.Text`
    font-size: 14px;
`;

export const ProductRightContainer = styled.View`
    height: 100%;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    padding: 10px;
`;

export const LessButtonCart = styled.TouchableOpacity`
    padding: 10px;
`;

export const LessButtonCartText = styled.Text`

`;

export const MoreButtonCart = styled.TouchableOpacity`
    padding: 10px;    
`;

export const MoreButtonCartText = styled.Text`

`;

export const ProductAmount = styled.Text`
    font-size: 15px;
`;