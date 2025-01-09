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

export const TotalCartContainer = styled.View`
    width: 100%;
    background-color: #f2f2f2;
    padding: 10px 16px;
    gap: 4px;
`;

export const TotalCart = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

export const TotalLabel = styled.Text`
    font-family: 'Inter_600SemiBold';
    font-size: 15px;
`;

export const Total = styled.Text`
    font-family: 'Inter_700Bold';
    font-size: 15px;
`;

export const ButtonCartPurchase = styled.TouchableOpacity`
    background-color: #fff;
    padding: 10px 16px;
    height: 50px;
    justify-content: center;
    background-color: #7e33f7;
    border-radius: 4px;
`;

export const ButtonCartPurchaseText = styled.Text`
    text-align: center;
    color: white;
    font-family: 'Inter_600SemiBold';
`;

export const CupomArea = styled.View`
    width: 100%;
`;

export const CupomButton = styled.TouchableOpacity`
    padding: 5px 0px;
`;

export const CupomButtonText = styled.Text`
    text-align: right;
    color: #7e33f7;
    font-family: 'Inter_600SemiBold';
`;