import React from 'react';
import {Input} from '@rneui/base';
import {Icon} from '@rneui/themed';
import {StyledView} from '../utils/style';

export function AddDay(): JSX.Element {
  return (
    <StyledView>
      <Input
        placeholder="输入事件名称"
        leftIcon={
          <Icon name="calendar_month" type="material" color="#517fa4" />
        }
      />
      <Icon name="calendar_month" type="material" />
    </StyledView>
  );
}
