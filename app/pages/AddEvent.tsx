import React, {useEffect, useMemo, useState} from 'react';
import {Button, Icon, Input} from '@rneui/themed';
import {StyledView} from '../utils/style';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {DateMode} from '../utils/type';
import {TouchableOpacity} from 'react-native';
import {
  addDay,
  clearCurrentEvent,
  updateDay,
} from '../store/features/eventSlice';
import {NavigationProps} from './HomeScreen';
import {useDispatch, useSelector} from 'react-redux';
import {transformDate, transformEvent, transformTimezoneOffset} from '../utils';

export function AddEvent(props: NavigationProps): JSX.Element {
  console.log('props', props.navigation.setOptions);

  const [date, setDate] = useState(new Date());
  const [eventName, setEventName] = useState('');
  const [mode, setMode] = useState<DateMode>();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const dateDisplay = useMemo(() => transformDate(date), [date]);
  const currentEvent = useSelector((state: any) => state.event.currentEvent);

  useEffect(() => {
    if (currentEvent && currentEvent.id) {
      props.navigation.setOptions({
        title: '编辑事件',
      });
      setDate(transformTimezoneOffset(new Date(currentEvent.dateTime)));
      setEventName(currentEvent.name);
    }
  }, [currentEvent, props.navigation]);
  useEffect(() => {
    return () => {
      // 离开页面时清除 redux 中存储的当前卡片信息
      dispatch(clearCurrentEvent());
    };
  }, [dispatch]);
  const onChange = (event: DateTimePickerEvent, selectedDate: Date) => {
    const currentDate = selectedDate;
    console.log(selectedDate);
    setShow(false);
    setDate(currentDate);
  };

  function showMode() {
    setShow(true);
  }

  function handleEventName(e: string) {
    setEventName(e);
  }

  function addOneDay() {
    const newEvent = {
      ...currentEvent,
      name: eventName,
      dateTime: dateDisplay,
    };
    if (currentEvent && currentEvent.id) {
      dispatch(updateDay(transformEvent(newEvent)));
    } else {
      dispatch(addDay(transformEvent(newEvent)));
    }
    props.navigation.navigate('Home');
  }

  return (
    <StyledView>
      <Input
        placeholder="输入事件名称"
        leftIcon={{type: 'font-awesome', name: 'bars'}}
        value={eventName}
        onChangeText={handleEventName}
        // leftIcon={
        //   <Icon name="calendar_month" type="material" color="#517fa4" />
        // }
      />
      <TouchableOpacity onPress={showMode}>
        <Input
          placeholder="选择目标日"
          disabled={true}
          value={dateDisplay}
          onPressOut={showMode}
          leftIcon={{type: 'font-awesome', name: 'calendar', size: 24}}
          // leftIcon={
          //   <Icon name="calendar_month" type="material" color="#517fa4" />
          // }
        />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
          // timeZoneName={'China/Beijing'}
          positiveButton={{label: '确定'}}
          negativeButton={{label: '取消'}}
        />
      )}
      <StyledView classes={['px:2']}>
        <Button
          buttonStyle={{
            backgroundColor: 'rgb(103,148,203)',
            borderRadius: 3,
          }}
          color="blue"
          radius={'sm'}
          onPress={addOneDay}
          type="solid">
          保存
          <Icon name="save" color="white" />
        </Button>
      </StyledView>
    </StyledView>
  );
}
