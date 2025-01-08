import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const ContentScrollView = styled.ScrollView``;

export const InfoView = styled.View`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 1px;
`;

export const InfoViewProductsCart = styled.View``;

export const TotalProductsCart = styled.Text`
    font-family: "Inter_900Black";
    font-size: 20px;
`;

export const TotalProductsCartText = styled.Text`
    font-family: 'Inter_400Regular';
`;

export const InfoViewProductCartAdd = styled.View`
    justify-content: center;
`;

export const AddProductCartButton = styled.TouchableOpacity`
    background-color: #f2f2f2;
    padding: 13px 15px;
    border-radius: 6px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const AddProductCartButtonText = styled.Text`
    color: #7e33f7;
    font-family: 'Inter_700Bold';
`;

export const ProductsAddedContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const ProductsAddedList = styled.FlatList`

`;