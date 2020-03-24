import {observer} from 'mobx-react';
import React, {FC, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Assets} from '../../assets';
import {useComponentWill} from '../../hooks/useComponentWill';
import {NavProps, resetToScreen} from '../../navigation';
import {useStores} from '../../store/stores';
import {timeout} from '../../utils/timeout';

export type LoadingScreenNavProps = {};

export const LoadingScreen: FC<NavProps<'LoadingScreen'>> = observer((props) => {
  const {mainStore} = useStores();

  useComponentWill(async () => {
    await timeout(500);
    if (mainStore.jwt) {
      resetToScreen('HomeScreen', {});
    } else {
      resetToScreen('OnboardingScreen', {});
    }
  });

  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.body}>
        <Text>Loading...</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  body: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
