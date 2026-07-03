import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../Screens/loginScreenLoginScreen'
import ForgetPasswordScreen from '../../Screens/ForgetPasswordScreen'
import OtpVerification from '../../Screens/OtpVerification'
import ResetPassword from '../../Screens/ResetPassword'

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="loginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="forgotScreen"
          component={ForgetPasswordScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="otpScreen"
          component={OtpVerification}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="resetPasswordScreen"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation