import {StyledView} from '../utils/style';
import {VerisCard} from '../components/VerisCard';
import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {EventType} from '../utils/type';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {VerisHeader} from '../components/VerisHeader';
import {handleEventList} from '../utils';
import {
  clearCurrentEvent, loadEvents,
  refreshEvent,
  setCurrEvent,
} from '../store/features/eventSlice';

export type NavigationProps = {
  navigation: any;
  route?: any;
};

export function HomeScreen(props: NavigationProps): JSX.Element {
  const eventList = useSelector((state: any) => state.event.eventList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEvents());
  }, [dispatch]);
  useEffect(() => {
    dispatch(clearCurrentEvent());
  }, [dispatch]);

  function enterEventDetail(event: EventType) {
    dispatch(setCurrEvent(event));
    props.navigation.navigate('EventDetail', {event});
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <VerisHeader navigation={props.navigation} />
        {/*    核心部分*/}
        {/*<WaterfallFlow*/}
        {/*  data={eventList}*/}
        {/*  numColumns={2}*/}
        {/*  renderItem={({item, index, columnIndex}) => (*/}
        {/*    <TouchableOpacity onPress={(e) => {*/}
        {/*      console.log('e', e)*/}
        {/*      enterEventDetail(item.id)*/}
        {/*    }}>*/}
        {/*      <VerisCard columnIndex={columnIndex} event={item} key={item.id} />*/}
        {/*    </TouchableOpacity>*/}
        {/*  )}*/}
        {/*/>*/}

        <StyledView classes={['flex:row', 'flex:wrap']}>
          {eventList.map((event: EventType) => {
            return (
              <StyledView classes={['w:1/2']} key={event.id}>
                <TouchableOpacity onPress={() => enterEventDetail(event)}>
                  <VerisCard event={event} />
                </TouchableOpacity>
              </StyledView>
            );
          })}
        </StyledView>
      </View>
    </ScrollView>
  );
}
