import {NavigationProps} from './HomeScreen';
import {VerisCard} from '../components/VerisCard';
import {StyledView} from '../utils/style';
import {useEffect} from 'react';
import {clearCurrentEvent} from '../store/features/eventSlice';
import {useDispatch} from 'react-redux';

export function EventDetail(props: NavigationProps): JSX.Element {
  const {route} = props;
  // console.log('route', route.params);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      // 离开页面时清除 redux 中存储的当前卡片信息
      dispatch(clearCurrentEvent());
    };
  }, [dispatch]);
  return (
    <StyledView classes={['mx:10', 'mt:1/3']}>
      <VerisCard event={route.params.event} showDetail={true} />
    </StyledView>
  );
}
