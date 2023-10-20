import React, {useCallback, useState} from 'react';
import {StyledImage, StyledText, StyledView} from '../utils/style';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {NavigationProps} from '../pages/HomeScreen';

export function VerisHeader(props: NavigationProps): JSX.Element {
  console.log('navigation', props.navigation);

  const [daysNumber, setDaysNumber] = useState(0);
  const addMatter = useCallback(() => {
    props.navigation.navigate('AddDay');
    setDaysNumber(daysNumber + 1);
  }, [daysNumber, props.navigation]);
  return (
    <StyledView
      classes={['flex:row', 'bg:blue-400', 'justify:between', 'items:center']}>
      <StyledText classes={['text:3xl', 'color:white', 'my:5', 'ml:5']}>
        Days Matter · 倒数日
      </StyledText>
      {/*<TouchableHighlight*/}
      {/*  underlayColor="white"*/}
      {/*  activeOpacity={0.6}*/}
      {/*  onPress={addMatter}>*/}
      <TouchableOpacity onPress={addMatter}>
        <StyledImage
          classes={['h:9', 'w:9', 'mr:5']}
          source={require('../img/add.png')}
        />
      </TouchableOpacity>
    </StyledView>
  );
}
