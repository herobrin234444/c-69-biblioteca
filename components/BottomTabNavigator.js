import React,{Component}  from "react"
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeAreaProvider} from "react-native-safe-area-context";

import SearchScreen from "../screens/Search";
import TransactionScreen from "../screens/transaction";

const Tab = createBottomTabNavigator();
export default class BottomTabNavigator extends Component{
    render(){
        return(
            <SafeAreaProvider>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Transação" component ={TransactionScreen} />
                        <Tab.Screen name="Pesquisa" component ={SearchScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        )
    }
}