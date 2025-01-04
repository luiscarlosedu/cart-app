import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { api } from '../../services/api';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { 
    Container,
    Title, 
    ContentScrollView, 
    ViewImageTop, 
    ViewImageTopContent,
    InfoView,
    InfoViewProducts,
    InfoViewProductAdd,
    TotalProducts,
    TotalProductsText,
    AddProductButton,
    AddProductButtonText,
    ProductsAreaContainer,
    ProductList
} from "./styles";

import { Header } from "../../components/HomeHeader";
import { ContainerComponent } from "../../components/ContainerComponent";

export default function Home() {

    return (
            <ContainerComponent>
                <Container>
                    <Header />
                    <ContentScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <ViewImageTop>
                            <ViewImageTopContent source={require('../../../assets/content-img.jpeg')} />
                        </ViewImageTop>

                        <InfoView>
                            <InfoViewProducts>
                                <TotalProducts>2.980</TotalProducts>
                                <TotalProductsText>Total de produtos</TotalProductsText>
                            </InfoViewProducts>

                            <InfoViewProductAdd>
                                <AddProductButton>
                                    <FontAwesome name="plus" color={'#7e33f7'} size={20} style={{fontFamily: 'Inter_100Thin'}} />
                                    <AddProductButtonText>Adicionar</AddProductButtonText>
                                </AddProductButton>
                            </InfoViewProductAdd>
                        </InfoView>

                        <ProductsAreaContainer>
                            {/* <ProductList
                                scrollEnabled={false}
                                data={data}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => {
                                    return (
                                        <View>
                                            <Text>

                                            </Text>
                                        </View>
                                    );
                                }}
                            /> */}
                        </ProductsAreaContainer>

                    </ContentScrollView>
                </Container>
            </ContainerComponent>
    );
}
