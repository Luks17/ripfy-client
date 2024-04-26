import { Entypo, FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { AppTabs } from "../lib/navigation/appTabs";
import CatalogScreen from "./App/CatalogScreen";

function AppScreen() {
  return (
    <AppTabs.Navigator>
      <AppTabs.Screen name='Catalog' component={CatalogScreen} options={{tabBarIcon: () => {return <FontAwesome6 name="music" size={22} color="black" />}}} />
      <AppTabs.Screen name='Playlists' component={CatalogScreen} options={{tabBarIcon: () => {return <MaterialCommunityIcons name="playlist-music" size={30} color="black" />}}}/>
      <AppTabs.Screen name='Player' component={CatalogScreen} options={{tabBarIcon: () => {return <FontAwesome6 name="headphones-simple" size={24} color="black" />}}} />
    </AppTabs.Navigator>
  );
}

export default AppScreen;
