import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type AppTabsParamList = {
  SongsNavigator: undefined;
  PlaylistNavigator: undefined;
  UserData: undefined;
};

export const AppTabs = createBottomTabNavigator<AppTabsParamList>();
