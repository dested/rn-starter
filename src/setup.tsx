import {configure} from 'mobx';
import {Provider} from 'mobx-react';
import React from 'react';
import {UIManager} from 'react-native';
import {MainApp} from './main';
import {stores} from './store/stores';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

configure({enforceActions: 'always'});

export default () => (
  <Provider {...stores}>
    <MainApp />
  </Provider>
);
