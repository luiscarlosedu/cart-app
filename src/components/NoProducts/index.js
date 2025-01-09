import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

import { 
    Container,
    NoProductsContent,
    NoProductsText,
    GoToHomeButton,
    GoToHomeButtonText
} from "./styles";

export function NoProducts() {
    const navigation = useNavigation();

    return (
        <Container>
            <NoProductsContent>
                <NoProductsText>
                    <MaterialCommunityIcons name="cart-off" size={120} />
                </NoProductsText>
                <NoProductsText>
                    Você não possui itens no seu carrinho :(
                </NoProductsText>

                <GoToHomeButton onPress={() => navigation.navigate('Home')}>
                    <GoToHomeButtonText>Ir para Início</GoToHomeButtonText>
                </GoToHomeButton>

            </NoProductsContent>
        </Container>
    );
}