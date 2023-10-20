import {Card} from '@rneui/themed';
import {EventType} from '../utils/type';
import {Text, View} from 'react-native';
import {StyledText} from '../utils/style';
type CardProps = {
  columnIndex: Number;
  event: EventType;
};
export function VerisCard(props: CardProps): JSX.Element {
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
    <View
      style={{
          // paddingTop: props.columnIndex === 0 ? 12 : 6,
          // paddingBottom: props.columnIndex === 0 ? 6 : 12,
        // paddingTop: 3,
        // paddingBottom: 3,
      }}>
      <Card>
        <Card.Title>{props.event.name}</Card.Title>
        <Card.Divider />
        <StyledText
          classes={[
            'text-align:center',
            'font-weight:bold',
            'text:6xl',
            'color:black',
          ]}>
          {props.event.days}
        </StyledText>
        <Card.Divider />
        <StyledText classes={['text-align:center']}>
          {props.event.dateTime}
        </StyledText>
      </Card>
    </View>
  );
}
