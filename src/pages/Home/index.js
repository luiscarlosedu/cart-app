import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { api } from '../../services/api';

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
import { ProductComponent } from "../../components/ProductComponent";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    async function loadProducts() {
        const productsRequest = await api.get('/produtos');
        setProducts(productsRequest.data);
    }
    
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
                            <ProductList
                                scrollEnabled={false}
                                numColumns={2}
                                data={products}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => <ProductComponent data={item}/>}
                                columnWrapperStyle={{
                                    justifyContent: 'space-between',
                                    gap: 5  // Ajusta o gap horizontal entre os itens
                                }}
                                ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
                            />
                        </ProductsAreaContainer>

                    </ContentScrollView>
                </Container>
            </ContainerComponent>
    );
}
