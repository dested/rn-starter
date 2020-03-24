import {NavigationContainerRef, useNavigation} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {HomeScreenNavProps} from './screens/homeScreen';
import {LoadingScreenNavProps} from './screens/loadingScreen';
import {OnboardingScreenNavProps} from './screens/onboardingScreen';
import {SomeModalNavProps} from './modals/someModal';

export type RouteParams = {
  LoadingScreen: LoadingScreenNavProps;
  HomeScreen: HomeScreenNavProps;
  OnboardingScreen: OnboardingScreenNavProps;
};
export type ModalParams = {
  Main: undefined;
  SomeModal: SomeModalNavProps;
};
export type Screens = keyof (RouteParams & ModalParams);
export type NavProps<TScreen extends Screens = Screens> = {
  route: RouteProp<RouteParams & ModalParams, TScreen>;
} & NavPropsNavigation<TScreen>;
export type NavPropsNavigation<TScreen extends Screens = Screens> = {
  navigation: StackNavigationProp<RouteParams & ModalParams, TScreen>;
};
export const MainStack = createStackNavigator<RouteParams>();
export const RootStack = createStackNavigator<ModalParams>();
export const navigationRef = React.createRef<NavigationContainerRef>();

export function resetToScreen<RouteName extends keyof RouteParams>(
  ...args: RouteParams[RouteName] extends undefined | any
    ? [RouteName] | [RouteName, RouteParams[RouteName]]
    : [RouteName, RouteParams[RouteName]]
) {
  navigationRef.current?.reset({routes: [{name: args[0], params: args[1]}]});
}
export function useSafeNavigation() {
  return useNavigation<NavProps['navigation']>();
}
