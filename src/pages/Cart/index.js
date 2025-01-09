import React, { useState } from "react";
import { View, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { useNavigation } from "@react-navigation/native";

import { 
    Container,
    ContentScrollView,
    InfoView,
    InfoViewProductsCart,
    TotalProductsCart,
    TotalProductsCartText,
    InfoViewProductCartAdd,
    AddProductCartButton,
    AddProductCartButtonText,
    ProductsAddedContainer,
    ProductsAddedList,
    TotalCartContainer,
    TotalCart,
    TotalLabel,
    Total,
    ButtonCartPurchase,
    ButtonCartPurchaseText,
    CupomArea,
    CupomButton,
    CupomButtonText
} from "./style";

import { ContainerComponent } from "../../components/ContainerComponent";
import { Header } from "../../components/HomeHeader";
import { CartProduct } from "../../components/CartProduct";
import { NoProducts } from "../../components/NoProducts";

export default function Cart() {
    const navigate = useNavigation();
    const data = [
        {
            "id": 1,
            "name": "Teclado Mecânico Compacto",
            "price": 299.99,
            "description": "Teclado mecânico compacto com iluminação RGB personalizável, ideal para jogos e produtividade.",
            "image": "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg"
          },
          {
            "id": 2,
            "name": "Teclado Ergonômico Avançado",
            "price": 399.99,
            "description": "Teclado ergonômico com teclas silenciosas e design confortável para longas horas de uso.",
            "image": "https://images.pexels.com/photos/7915211/pexels-photo-7915211.jpeg"
          },
    ]

    return (
            <Container>
                <ContainerComponent>
                    <Header />
                    <ContentScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <InfoView>
                            <InfoViewProductsCart>
                                <TotalProductsCart>{data.length}</TotalProductsCart>
                                <TotalProductsCartText>Produtos adicionados</TotalProductsCartText>
                            </InfoViewProductsCart>
                            <InfoViewProductCartAdd>
                                <AddProductCartButton>
                                    <AddProductCartButtonText
                                        onPress={() => navigate.navigate('Home')}
                                    >
                                        Adicionar produtos
                                    </AddProductCartButtonText>
                                </AddProductCartButton>
                            </InfoViewProductCartAdd>
                        </InfoView>
                        
                        {data.length !== 0 && (
                            <ProductsAddedContainer>
                                <ProductsAddedList
                                    scrollEnabled={false}
                                    data={data}
                                    keyExtractor={item => item.id}
                                    renderItem={({item}) => <CartProduct data={item} />}
                                    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                                />
                            </ProductsAddedContainer>
                        )}
                    </ContentScrollView>

                    
                    {data.length === 0 && <NoProducts/>}

                </ContainerComponent>

                {data.length !== 0 && (
                    <TotalCartContainer>
                    <TotalCart>
                        <TotalLabel>Total:</TotalLabel>
                        <Total>R$ 100,00</Total>
                    </TotalCart>

                    <CupomArea>
                        <CupomButton>
                            <CupomButtonText>
                                <FontAwesome name="tag" /> Adicionar cupom
                            </CupomButtonText>
                        </CupomButton>
                    </CupomArea>

                    <ButtonCartPurchase
                    
                    >
                        <ButtonCartPurchaseText>
                            Comprar
                        </ButtonCartPurchaseText>
                    </ButtonCartPurchase>
                </TotalCartContainer>
                )}

            </Container>
    )
}