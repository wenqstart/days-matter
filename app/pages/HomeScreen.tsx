import {StyledView} from '../utils/style';
import {VerisCard} from '../components/VerisCard';
import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {EventType} from '../utils/type';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {VerisHeader} from '../components/VerisHeader';
import {handleEventList} from '../utils';
import {
  clearCurrentEvent,
  refreshEvent,
  setCurrEvent,
} from '../store/features/eventSlice';

export type NavigationProps = {
  navigation: any;
  route?: any;
};

export function HomeScreen(props: NavigationProps): JSX.Element {
  const eventState = useSelector((state: any) => state.event);
  const dispatch = useDispatch();

  const initEventList = useCallback(() => {
    // console.log('eventList', eventList);
    dispatch(refreshEvent(handleEventList(eventState.eventList)));
  }, [dispatch, eventState]);
  useEffect(() => {
    initEventList();
  }, [initEventList]);
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
          {eventState.eventList.map((event: EventType) => {
            return (
              <StyledView classes={['w:1/2']}>
                <TouchableOpacity onPress={() => enterEventDetail(event)}>
                  <VerisCard event={event} key={event.id} />
                </TouchableOpacity>
              </StyledView>
            );
          })}
        </StyledView>
      </View>
    </ScrollView>
  );
}
