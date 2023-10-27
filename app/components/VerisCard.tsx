import {Card} from '@rneui/themed';
import {EventType} from '../utils/type';
import {StyleSheet, Text, View} from 'react-native';
import {StyledText, StyledView} from '../utils/style';
type CardProps = {
  columnIndex?: number;
  event: EventType;
  showDetail?: boolean;
};
export function VerisCard(props: CardProps): JSX.Element {
  const {event: currentEvent, showDetail} = props;
  return (
    // <View
    //   style={{
    //     shadowOffset: {
    //       // 设置阴影偏移量
    //       width: 0,
    //       height: 4,
    //     },
    //     shadowRadius: 4, // 设置阴影模糊半径
    //     shadowOpacity: 0.13, // 设置阴影的不透明度
    //     borderRadius: 10, // 设置圆角
    //     shadowColor: 'rgba(96,96,96,1)', // 设置阴影色
    //   }}
    // />
    <StyledView>
      <Card>
        <Card.Title>
          <StyledText
            classes={[
              'text-align:center',
              `text:${showDetail ? '2xl' : 'xl'}`,
            ]}>
            {currentEvent.showName}
          </StyledText>
        </Card.Title>
        <Card.Divider />
        <StyledText
          classes={[
            'text-align:center',
            'font-weight:bold',
            `text:${showDetail ? '9xl' : '7xl'}`,
            'color:black',
          ]}>
          {currentEvent.days}
        </StyledText>
        <Card.Divider />
        <StyledText
          classes={['text-align:center', `text:${showDetail ? '2xl' : 'xl'}`]}>
          {showDetail ? '目标日： ' : ''} {props.event.dateTime}
        </StyledText>
      </Card>
    </StyledView>
  );
}
