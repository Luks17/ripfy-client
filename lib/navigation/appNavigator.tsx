import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CatalogScreen from "../../screens/App/CatalogScreen";

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    return <Tab.Navigator>
        <Tab.Screen name='Catalogo' component={CatalogScreen}/>
        <Tab.Screen name='Player' component={CatalogScreen}/>
        <Tab.Screen name='PlayList' component={CatalogScreen}/>

     </Tab.Navigator>
}

export default AppNavigator;