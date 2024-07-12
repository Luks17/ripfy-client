import { createStackNavigator } from "@react-navigation/stack";

export type SignedInStackParamList = {
  AppTabs: undefined;
  AppTrackPlayer: undefined;
};

export const SignedInStack = createStackNavigator<SignedInStackParamList>();
