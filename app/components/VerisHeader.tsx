import React, {useCallback, useState} from 'react';
import {StyledImage, StyledText, StyledView} from '../utils/style';
import {TouchableHighlight} from 'react-native';

export function VerisHeader(): JSX.Element {
  const [daysNumber, setDaysNumber] = useState(0);
  const addMatter = useCallback(() => {
    console.log('333');
    setDaysNumber(daysNumber + 1);
  }, [daysNumber]);
  return (
    <StyledView
      classes={['flex:row', 'bg:blue-400', 'justify:between', 'items:center']}
      darkClasses={['bg:purple-800']}>
      <StyledText
        classes={['text:3xl', 'color:white', 'my:5', 'ml:5']}
        darkClasses={['color:gray-100']}>
        Days Matter · 倒数日
      </StyledText>
      <TouchableHighlight
        underlayColor="lightgray"
        activeOpacity={0.6}
        onPress={addMatter}>
        <StyledImage
          classes={['h:9', 'w:9', 'mr:5']}
          source={require('../img/add.png')}
        />
      </TouchableHighlight>
    </StyledView>
  );
}
