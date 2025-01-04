import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Container, Title } from "./styles";

import { Header } from "../../components/HomeHeader";
import { ContainerComponent } from "../../components/ContainerComponent";

export default function Home() {
    return (
        <ContainerComponent>
            <Container>
                <Header />
                <ContentScrollView>
                    
                </ContentScrollView>
            </Container>
        </ContainerComponent>
    );
}
