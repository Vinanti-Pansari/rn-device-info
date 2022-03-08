import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './NavigationRef';
import {AppRoutes} from './Routes';
import Home from '../screens/Home';
import ButtonScreen from '../screens/ButtonScreen';
import store from '../reduxStorage/store/Store';

const Stack = createStackNavigator();
const AppStack = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'#000'}
          translucent
        />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={AppRoutes.Home} component={Home} />

          <Stack.Screen
            name={AppRoutes.ButtonScreen}
            component={ButtonScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default AppStack;
