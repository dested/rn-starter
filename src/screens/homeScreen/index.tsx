import {observer} from 'mobx-react';
import React, {FC, useCallback, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Assets} from '../../assets';
import {useComponentWill} from '../../hooks/useComponentWill';
import {NavProps, resetToScreen} from '../../navigation';
import {useStores} from '../../store/stores';
import {timeout} from '../../utils/timeout';

export type HomeScreenNavProps = {};

export const HomeScreen: FC<NavProps<'HomeScreen'>> = observer((props) => {
  const {mainStore} = useStores();

  useComponentWill(async () => {
    await timeout(500);
  });

  const onModal = useCallback(() => {
    props.navigation.push('SomeModal', {shoes: true});
  }, []);

  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.body}>
        <Text>Home...</Text>
        <Button title={'Modal!'} onPress={onModal}></Button>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  body: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
