import React, {useCallback, useState} from 'react';
import {StyledImage, StyledText, StyledView} from '../utils/style';
import {TouchableOpacity} from 'react-native';
import {NavigationProps} from '../pages/HomeScreen';
import {APP_NAME} from '../utils/constant';
import {addMatter} from '../hooks/useEvent';

export function VerisHeader(props: NavigationProps): JSX.Element {
  console.log('navigation', props.navigation);

  const handleAddMatter = useCallback(() => {
    addMatter(props.navigation, 'AddEvent');
  }, [props.navigation]);
  return (
    <StyledView
      classes={['flex:row', 'bg:blue-400', 'justify:between', 'items:center']}>
      <StyledText classes={['text:3xl', 'color:white', 'my:5', 'ml:5']}>
        {APP_NAME}
      </StyledText>
      {/*<TouchableHighlight*/}
      {/*  underlayColor="white"*/}
      {/*  activeOpacity={0.6}*/}
      {/*  onPress={handleAddMatter}>*/}
      <TouchableOpacity onPress={handleAddMatter}>
        <StyledImage
          classes={['h:9', 'w:9', 'mr:5']}
          source={require('../img/add.png')}
        />
      </TouchableOpacity>
    </StyledView>
  );
}
