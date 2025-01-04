import React from "react";
import { ContainerComponentStyled } from "./styles";

export function ContainerComponent({children}) {
    return (
        <ContainerComponentStyled>
            {children}
        </ContainerComponentStyled>
    );
}