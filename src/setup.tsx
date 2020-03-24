import './utils/exceptionUtils';

import {configure} from 'mobx';
import {Provider} from 'mobx-react';
import React from 'react';
import {UIManager} from 'react-native';
import {Config} from './config';
import {MainApp} from './main';
import {stores} from './store/stores';
import {codePusher} from './utils/codePusher';
import {PushUtils} from './utils/pushUtils';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
Config.start();

configure({enforceActions: 'always'});

PushUtils.setupChannel();

export default codePusher(() => (
  <Provider {...stores}>
    <MainApp />
  </Provider>
));
