import {observer} from 'mobx-react';
import React, {FC, useCallback, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Assets} from '../../assets';
import {useComponentWill} from '../../hooks/useComponentWill';
import {NavProps, resetToScreen} from '../../navigation';
import {useStores} from '../../store/stores';
import {timeout} from '../../utils/timeout';

export type SomeModalNavProps = {
  shoes: boolean;
};

export const SomeModal: FC<NavProps<'SomeModal'>> = observer((props) => {
  const {mainStore} = useStores();

  useComponentWill(async () => {});

  const onClose = useCallback(() => {
    props.navigation.pop();
  }, []);
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.body}>
        <Text>Modal...</Text>
        <Button title={'Close'} onPress={onClose}></Button>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  body: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
