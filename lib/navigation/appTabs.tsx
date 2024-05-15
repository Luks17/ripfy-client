import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type AppBottomTabsParamList = {
  Catalog: undefined;
  Playlists: undefined;
  Player:undefined;
  UserData: undefined;
};

export const AppTabs = createBottomTabNavigator<AppBottomTabsParamList>();
