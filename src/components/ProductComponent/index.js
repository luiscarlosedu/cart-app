import React, {useEffect} from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { 
    ItemView,
    ItemTitle,
    ItemImage,
    ItemViewContent,
    ItemPrice,
    ItemViewCartBtn,
    ItemCartBtn,
    ItemCartBtnText
} from "./styles";

export function ProductComponent({ data }) {
    return (
        <ItemView>
            <ItemImage source={
                { uri: data?.image }
            } />
            <ItemViewContent>
                <ItemTitle>{data?.name}</ItemTitle>
                <ItemPrice>{data?.price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                })}</ItemPrice>
            </ItemViewContent>
            <ItemViewCartBtn>
                <ItemCartBtn>
                    <FontAwesome name="shopping-cart" color={"#fff"} />
                    <ItemCartBtnText>
                        Adicionar ao carrinho
                    </ItemCartBtnText>
                </ItemCartBtn>
            </ItemViewCartBtn>
        </ItemView>
    );
}
