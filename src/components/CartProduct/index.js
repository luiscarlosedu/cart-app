import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
    Container,
    ProductImage,
    ProductTitle,
    ProductLeftContainer,
    ProductPrice,
    ProductLeftTextContent,
    ProductRightContainer,
    LessButtonCart,
    LessButtonCartText,
    MoreButtonCart,
    MoreButtonCartText,
    ProductAmount
} from './style';

export function CartProduct({data}) {
    return (
        <Container>
            <ProductLeftContainer>

                <ProductImage source={{uri: data.image}} />

                <ProductLeftTextContent>
                    <ProductTitle>{data.name}</ProductTitle>
                    <ProductPrice>{data?.price.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</ProductPrice>
                </ProductLeftTextContent>

            </ProductLeftContainer>

            <ProductRightContainer>
                <LessButtonCart>
                    <LessButtonCartText>
                        <FontAwesome name="minus" size={18} />
                    </LessButtonCartText>
                </LessButtonCart>

                <ProductAmount>2</ProductAmount>

                <MoreButtonCart>
                    <MoreButtonCartText>
                        <FontAwesome name="plus" size={18} />
                    </MoreButtonCartText>
                </MoreButtonCart>
            </ProductRightContainer>

        </Container>
    );
}