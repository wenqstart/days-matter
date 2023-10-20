import {StyledView} from '../utils/style';
import {VerisCard} from '../components/VerisCard';
import React from 'react';
import {useSelector} from 'react-redux';
import {EventType} from '../utils/type';
import {ScrollView, StyleSheet, View} from 'react-native';
import {VerisHeader} from '../components/VerisHeader';
import WaterfallFlow from 'react-native-waterfall-flow';
export type NavigationProps = {
  navigation: any;
};
export function HomeScreen(props: NavigationProps): JSX.Element {
  const eventList: EventType[] = useSelector((state: any) => state.event);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {/*  头部*/}
      <VerisHeader navigation={props.navigation} />
      {/*    核心部分*/}
      <WaterfallFlow
        data={eventList}
        numColumns={2}
        renderItem={({item, index, columnIndex}) => (
          <VerisCard columnIndex={columnIndex} event={item} key={item.id} />
        )}
      />

      {/*                  <View style={styles.cardContainer}>*/}
      {/*  {eventList.map(event => (*/}
      {/*    <VerisCard event={event} key={event.id} />*/}
      {/*  ))}*/}
      {/*</View>*/}
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   cardContainer: {
//     'column-gap': '10px', // 卡片间距
//     'column-count': 2, // 卡片列数
//   },
// });
