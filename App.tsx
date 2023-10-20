/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleProvider} from 'react-native-zephyr';
import {createTheme, ThemeProvider} from '@rneui/themed';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/store';
import {HomeScreen} from './app/pages/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddDay} from './app/pages/AddDay';
const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <StyleProvider>
            <StatusBar />
            <Stack.Navigator initialRouteName={'Home'}>
              <Stack.Screen
                options={{headerShown: false}}
                name="Home"
                component={HomeScreen}
              />
              <Stack.Screen
                options={{
                  title: '添加新日子',
                  headerTintColor: '#fff',
                  headerStyle: {
                    backgroundColor: '#6794cb',
                  },
                }}
                name="AddDay"
                component={AddDay}
              />
            </Stack.Navigator>
          </StyleProvider>
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
