import _ from 'lodash';
import moment from 'moment/moment';
import {EventType} from './type';
import {v4 as uuid} from 'uuid';

/**
 * @param startDate  开始日期 yyyy-MM-dd
 * @param enDate  结束日期 yyyy-MM-dd
 * @returns {number} 两日期相差的天数
 */
export function getDaysBetween(startDate: string, endDate: string) {
  console.log('startDate', startDate);
  console.log('endDate', endDate);
  const sDate = Date.parse(startDate);
  const eDate = Date.parse(endDate);
  console.log('sDate', sDate);
  console.log('eDate', eDate);
  // if (sDate > eDate) {
  //   return '0';
  // }
  // // 这个判断可以根据需求来确定是否需要加上
  // if (sDate === eDate) {
  //   return '1';
  // }
  return Math.ceil((eDate - sDate) / (1 * 24 * 60 * 60 * 1000));
}

/**
 * 处理 new Date 比当前时间少8小时的问题
 * @param date
 */
export function transformTimezoneOffset(date: Date) {
  const newDate = _.cloneDeep(date);
  // console.log('newDate', newDate.getTimezoneOffset());

  // 当前时间 = 包含时差的当前时间 + 时差时间，getTimezoneOffset() 获取时差（以分钟为单位），转为小时需要除以 60
  // newDate.setHours(newDate.getHours() + newDate.getTimezoneOffset() / 60);
  // newDate.setHours(newDate.getHours() + 8);
  return newDate;
}

/**
 *  时间格式化 YYYY-MM-DD
 * @param date
 */
export function transformDate(date: Date) {
  // console.log('transformDate', date);
  // 选择的每个时间（UTC）都要转成中国标准时间（CST）
  // return moment(transformTimezoneOffset(date)).format('YYYY-MM-DD');
  return moment(date).format('YYYY-MM-DD');
}

/**
 * 处理新增的事件对象
 * @param event
 */
export function transformEvent(event: EventType) {
  console.log('event', event);
  const {name: eventName, dateTime: dateDisplay} = event;
  // 当前日期
  const currentDay = transformDate(new Date());
  console.log('currentDay', currentDay);
  // 目标日日期
  const targetDay = transformDate(new Date(dateDisplay));
  console.log('targetDay', targetDay);
  // 时间间隔
  let dateInterval = getDaysBetween(currentDay, targetDay);
  // 深拷贝事件名称
  let newEventName = _.cloneDeep(eventName);
  if (dateInterval < 0) {
    dateInterval = Math.abs(dateInterval);
    newEventName = `离${newEventName}已经`;
  } else {
    newEventName = `${newEventName}还有`;
  }
  const eventObj: EventType = {
    id: event.id ? event.id : uuid(),
    name: eventName,
    showName: newEventName,
    days: JSON.stringify(dateInterval),
    dateTime: dateDisplay,
  };

  return eventObj;
}

/**
 * 每次进入首页刷新卡片状态
 * @param eventList
 */
export function handleEventList(eventList: EventType[]) {
  return eventList.map(event => {
    const {showName, days} = transformEvent(event);
    return {...event, showName, days};
  });
}
