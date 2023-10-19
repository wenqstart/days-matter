/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StyleProvider} from 'react-native-zephyr';
import {ThemeProvider, createTheme} from '@rneui/themed';
import {Button, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {VerisCard} from './app/components/VerisCard';
import {VerisHeader} from './app/components/VerisHeader';
import {EventType} from './app/utils/type';

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});
function App(): JSX.Element {
  const [eventList, setEventList] = useState<Array<EventType>>([]);
  useEffect(() => {
    setEventList([
      {
        name: 'xx生日',
        dateTime: '2023-11-24'
      }
    ])
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <StyleProvider>
        <SafeAreaView>
          <StatusBar />
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            {/*  头部*/}
            <VerisHeader />
            {/*    核心部分*/}
            {eventList.map(event => (
              <VerisCard event={event} />
            ))}
          </ScrollView>
        </SafeAreaView>
      </StyleProvider>
    </ThemeProvider>
  );
}
export default App;
