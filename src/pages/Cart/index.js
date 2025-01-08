import React, { useState } from "react";
import { View, Text } from "react-native";

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
    ProductsAddedList
} from "./style";

import { ContainerComponent } from "../../components/ContainerComponent";
import { Header } from "../../components/HomeHeader";
import { CartProduct } from "../../components/CartProduct";

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
        //   {
        //     "id": 2,
        //     "name": "Teclado Ergonômico Avançado",
        //     "price": 399.99,
        //     "description": "Teclado ergonômico com teclas silenciosas e design confortável para longas horas de uso.",
        //     "image": "https://images.pexels.com/photos/7915211/pexels-photo-7915211.jpeg"
        //   },
        //   {
        //     "id": 3,
        //     "name": "Mouse Óptico Branco",
        //     "price": 149.99,
        //     "description": "Mouse óptico branco com design minimalista, perfeito para trabalho e uso cotidiano.",
        //     "image": "https://images.pexels.com/photos/17821147/pexels-photo-17821147/free-photo-of-white-computer-mouse.jpeg"
        //   },
        //   {
        //     "id": 4,
        //     "name": "Mouse Gamer RGB",
        //     "price": 249.99,
        //     "description": "Mouse gamer com iluminação RGB, alta precisão e botões programáveis para melhor desempenho.",
        //     "image": "https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/09/Trust-GXT-922-Mouse-7-scaled.jpg"
        //   },
        //   {
        //     "id": 5,
        //     "name": "Mousepad Estampado",
        //     "price": 59.99,
        //     "description": "Mousepad com estampa personalizada, superfície lisa e base antiderrapante.",
        //     "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/27ce6a6a-18ec-499b-b759-de68843369a8/d871v5t-6477c3ee-26a9-47c1-b8d7-3731c26ff7e8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3Y2U2YTZhLTE4ZWMtNDk5Yi1iNzU5LWRlNjg4NDMzNjlhOFwvZDg3MXY1dC02NDc3YzNlZS0yNmE5LTQ3YzEtYjhkNy0zNzMxYzI2ZmY3ZTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.F1O1AK45SeW4hw03D4XQO12S9PbfoSnOBw78jZBfCoo"
        //   }
    ]

    return (
        <ContainerComponent>
            <Container>
                <Header />

                <ContentScrollView>
                    <InfoView>
                        <InfoViewProductsCart>
                            <TotalProductsCart>0</TotalProductsCart>
                            <TotalProductsCartText>Produtos adicionados</TotalProductsCartText>
                        </InfoViewProductsCart>

                        <InfoViewProductCartAdd>
                            <AddProductCartButton>
                                {/* <FontAwesome name="plus" color={'#7e33f7'} size={20} style={{fontFamily: 'Inter_100Thin'}} /> */}
                                <AddProductCartButtonText
                                    onPress={() => navigate.navigate('Home')}
                                >
                                    Adicionar produtos
                                </AddProductCartButtonText>
                            </AddProductCartButton>
                        </InfoViewProductCartAdd>
                    </InfoView>

                    <ProductsAddedContainer>
                        <ProductsAddedList 
                           scrollEnabled={false}
                           data={data}
                           keyExtractor={item => item.id}
                           renderItem={({item}) => <CartProduct data={item} />}
                        />
                    </ProductsAddedContainer>

                    

                </ContentScrollView>

            </Container>
        </ContainerComponent>
    )
}