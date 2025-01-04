import React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { 
    Container,
    Perfil,
    About,
    ImgBox,
    PerfilBox,
    Name,
    ProfName,
    AskButton
} from "./styles";

export function Header() {
    return (
        <Container>
            <Perfil>
                <ImgBox></ImgBox>
                <PerfilBox>
                    <Name>Luís Eduardo</Name>
                    <ProfName>Desenvolvedor</ProfName>
                </PerfilBox>
            </Perfil>
            <About>
                <AskButton>
                    <FontAwesome style={{textAlign: 'center'}} name="question-circle" size={20} color={"#7e33f7"}/>
                </AskButton>
            </About>
        </Container>
    );
}