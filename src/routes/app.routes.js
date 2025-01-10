import React, {useEffect, useContext} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { CartContext } from "../contexts/CartContext";

import { 
    useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';

import Home from "../pages/Home";
import Cart from '../pages/Cart';

const AppTabs = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync()

export default function AppRoutes(){
    const { cartAmount } = useContext(CartContext);

    const [loaded, error] = useFonts({
        Inter_900Black,
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <AppTabs.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarActiveTintColor: '#7e33f7',
                tabBarInactiveTintColor: '#959595',
                tabBarLabelStyle: {
                    fontFamily: 'Inter_900Black',
                },
                tabBarStyle: {
                    backgroundColor: '#f2f2f2',
                    borderTopWidth: 0,
                },
                
                sceneStyle: {
                    backgroundColor: 'white'
                },
            }}
        >
            <AppTabs.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => {
                        return <FontAwesome name="home" color={color} size={size} />
                    },
                }}
            />

            <AppTabs.Screen 
                name="Cart"
                component={Cart}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({color, size}) => {
                        return <FontAwesome name="shopping-cart" color={color} size={size} />
                    },
                    tabBarBadge: cartAmount,
                    tabBarBadgeStyle: {
                        color: 'white',
                        backgroundColor: '#7e33f7',
                    },
                }}
            />
        </AppTabs.Navigator>
    )
}