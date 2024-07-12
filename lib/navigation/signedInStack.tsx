import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type SignedInStackParamList = {
  AppTabs: undefined;
  AppTrackPlayer: undefined;
};

export const SignedInStack =
  createNativeStackNavigator<SignedInStackParamList>();
