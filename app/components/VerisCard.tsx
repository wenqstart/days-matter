import {Card} from '@rneui/themed';
import {EventType} from '../utils/type';
import {Text} from 'react-native';
type CardProps = {
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
    <Card
      containerStyle={{
        width: '50%',
      }}>
      <Card.Title>{props.event.name}</Card.Title>
      <Card.Divider />
      <Text>{props.event.dateTime}</Text>
    </Card>
  );
}
