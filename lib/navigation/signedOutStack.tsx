import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type SignedOutStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
};

export const SignedOutStack =
  createNativeStackNavigator<SignedOutStackParamList>();
