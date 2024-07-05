import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type AppBottomTabsParamList = {
  SongsNavigator: undefined;
  PlaylistNavigator: undefined;
  UserData: undefined;
};

export const AppTabs = createBottomTabNavigator<AppBottomTabsParamList>();
