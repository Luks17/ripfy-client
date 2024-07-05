import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type AppBottomTabsParamList = {
  Songs: undefined;
  PlaylistNavigator: undefined;
  UserData: undefined;
};

export const AppTabs = createBottomTabNavigator<AppBottomTabsParamList>();
