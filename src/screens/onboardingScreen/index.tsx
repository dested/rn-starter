import {observer} from 'mobx-react';
import React, {FC, useCallback, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Assets} from '../../assets';
import {useComponentWill} from '../../hooks/useComponentWill';
import {NavProps, resetToScreen} from '../../navigation';
import {useStores} from '../../store/stores';
import {timeout} from '../../utils/timeout';

export type OnboardingScreenNavProps = {};

export const OnboardingScreen: FC<NavProps<'OnboardingScreen'>> = observer((props) => {
  const {mainStore} = useStores();

  useComponentWill(async () => {});

  const onLogin = useCallback(() => {
    mainStore.setJWT('HI IM A JWT!');
    props.navigation.push('HomeScreen', {});
  }, []);

  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.body}>
        <Text>Onboarding...</Text>
        <Button title={'Log In'} onPress={onLogin}></Button>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  body: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
