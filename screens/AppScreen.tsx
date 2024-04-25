import { AppTabs } from "../lib/navigation/appTabs";
import CatalogScreen from "./App/CatalogScreen";

function AppScreen() {
  return (
    <AppTabs.Navigator>
      <AppTabs.Screen name="Catalog" component={CatalogScreen} />
    </AppTabs.Navigator>
  );
}

export default AppScreen;
