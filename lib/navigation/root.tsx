import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();
