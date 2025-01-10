import React, { useState } from "react";
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

export function CartProduct({data, addToCart, removeFromCart}) {
    const [amount, setAmount] = useState(data?.amount);

    function handleIncrease() {
        addToCart();
        setAmount(item => item + 1);
    }

    function handleDecrease() {
        if (amount === 0) {
            setAmount(0);
            return;
        }
        removeFromCart();
        setAmount(item => item - 1);
    }

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
                <LessButtonCart
                    onPress={handleDecrease}
                >
                    <LessButtonCartText>
                        <FontAwesome name="minus" size={18} />
                    </LessButtonCartText>
                </LessButtonCart>

                <ProductAmount>{amount}</ProductAmount>

                <MoreButtonCart
                    onPress={handleIncrease}
                >
                    <MoreButtonCartText>
                        <FontAwesome name="plus" size={18} />
                    </MoreButtonCartText>
                </MoreButtonCart>
            </ProductRightContainer>

        </Container>
    );
}