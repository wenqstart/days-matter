/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleProvider} from 'react-native-zephyr';
import {Button, createTheme, Icon, ThemeProvider} from '@rneui/themed';
import {StatusBar, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import store, {persistor} from './app/store';
import {HomeScreen} from './app/pages/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddEvent} from './app/pages/AddEvent';
import {EventDetail} from './app/pages/EventDetail';
import {PersistGate} from 'redux-persist/integration/react';
import {ADD_EVENT, APP_NAME} from './app/utils/constant';
import {editMatter} from './app/hooks/useEvent';

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
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StyleProvider>
            <StatusBar />
            <NavigationContainer>
              <Stack.Navigator initialRouteName={'Home'}>
                <Stack.Screen
                  options={{headerShown: false}}
                  name="Home"
                  component={HomeScreen}
                />
                <Stack.Screen
                  options={{
                    title: ADD_EVENT,
                    headerTintColor: '#fff',
                    headerStyle: {
                      backgroundColor: '#6794cb',
                    },
                  }}
                  name="AddEvent"
                  component={AddEvent}
                />
                <Stack.Screen
                  options={({navigation, route}) => ({
                    title: APP_NAME,
                    headerTintColor: '#fff',
                    headerStyle: {
                      backgroundColor: '#6794cb',
                    },
                    headerRight: () => (
                      <TouchableOpacity
                        onPress={() => editMatter(navigation, 'AddEvent')}>
                        <Icon name="edit" type="font-awesome" color="#fff" />
                      </TouchableOpacity>
                    ),
                  })}
                  name="EventDetail"
                  component={EventDetail}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </StyleProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
