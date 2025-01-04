import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { 
    Box
} from "./styles";

export function ProductComponent({ data }) {
    return (
        <Box>
            <Text>
                {data.name}
            </Text>
        </Box>
    );
}
