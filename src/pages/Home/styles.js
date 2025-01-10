import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const ContentScrollView = styled.ScrollView`
    margin-top: 5px;
`;

export const ViewImageTop = styled.View`
    width: 100%;
    height: 190px;
`;

export const ViewImageTopContent = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 3px;
`;

export const InfoView = styled.View`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 1px;
`;

export const InfoViewProducts = styled.View``;

export const TotalProducts = styled.Text`
    font-family: "Inter_900Black";
    font-size: 20px;
`;

export const TotalProductsText = styled.Text`
    font-family: 'Inter_400Regular';
`;

export const InfoViewProductAdd = styled.View`
    justify-content: center;
`;

export const AddProductButton = styled.TouchableOpacity`
    background-color: #f2f2f2;
    padding: 13px 15px;
    border-radius: 6px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const AddProductButtonText = styled.Text`
    color: #7e33f7;
    font-family: 'Inter_700Bold';
`;

export const ProductsAreaContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const ProductList = styled.FlatList`
    margin-bottom: 10px;
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