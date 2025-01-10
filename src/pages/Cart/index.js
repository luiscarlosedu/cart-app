import React, { useState, useContext } from "react";
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

import { CartContext } from "../../contexts/CartContext";

import { ContainerComponent } from "../../components/ContainerComponent";
import { Header } from "../../components/HomeHeader";
import { CartProduct } from "../../components/CartProduct";
import { NoProducts } from "../../components/NoProducts";

export default function Cart() {
    const navigate = useNavigation();
    const { cart, cartAmount, addItemCart, removeItemCart } = useContext(CartContext);

    function handleAddItemCart(item) {
        addItemCart(item);
    }

    function handleRemoveItemCart(item) {
        removeItemCart(item);
    }

    return (
            <Container>
                <ContainerComponent>
                    <Header />
                    <ContentScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <InfoView>
                            <InfoViewProductsCart>
                                <TotalProductsCart>{cartAmount}</TotalProductsCart>
                                <TotalProductsCartText>
                                    {cartAmount !== 1 ? 'Produtos adicionados' : 'Produto adicionado'}
                                </TotalProductsCartText>
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
                        
                        {cartAmount !== 0 && (
                            <ProductsAddedContainer>
                                <ProductsAddedList
                                    scrollEnabled={false}
                                    data={cart}
                                    keyExtractor={item => item.id}
                                    renderItem={({item}) => (
                                        <CartProduct 
                                            data={item} 
                                            addToCart={() => handleAddItemCart(item)} 
                                            removeFromCart={() => handleRemoveItemCart(item)} 
                                        />
                                    )}
                                    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                                />
                            </ProductsAddedContainer>
                        )}
                    </ContentScrollView>

                    
                    {cartAmount === 0 && <NoProducts/>}

                </ContainerComponent>

                {cartAmount !== 0 && (
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