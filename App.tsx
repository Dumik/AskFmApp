import React, {Fragment, useEffect} from 'react';

import { Platform, StatusBar} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import { Root } from './src/navigation/Root';

const App = () => {
  useEffect(() => SplashScreen?.hide(), []);
  return (
    <Fragment>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <Root />
    </Fragment>
  );
};

export default App;
