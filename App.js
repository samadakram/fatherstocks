import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { LogBox, View, Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import Bugsnag from '@bugsnag/react-native';
import BugsnagPluginReactNavigation from '@bugsnag/plugin-react-navigation';

import { setStore } from './src/core/global/globalActions';
import routes from './src/core/routes';
import { navigationRef } from './src/core/utils/navigation';

// Get store and initial state
import globalInitialState from './src/core/global/init';
import configureStore from './src/core/store';

const { BUGSNAG_KEY, DEBUG } = require('./src/core/constants').default;

// this disables yellow app warnings if not in debug mode
if (!DEBUG) {
  LogBox.ignoreAllLogs(true);
}

// Create navigation stack and get stack values
const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;
const { forVerticalIOS, RevealFromBottomAndroidSpec, forHorizontalIOS } = CardStyleInterpolators;

// Setup Bugsnag
Bugsnag.start({
  apiKey: BUGSNAG_KEY,
  plugins: [new BugsnagPluginReactNavigation()],
});

const { createNavigationContainer } = Bugsnag.getPlugin('reactNavigation');
const BugsnagNavigationContainer = createNavigationContainer(NavigationContainer);

const App = () => {
  // Initialise the store
  const store = configureStore({ global: (new globalInitialState()) });
  store.dispatch(setStore(store));

  const linking = {
    prefixes: ['com.fatherstock.app://'],
    config: {
      screens: {
        ResetPassword: 'resetPassword/:token/:email',
        Login: 'login',
      },
    },
  };

  // Get screen options
  const getOptions = (vertical) => {
    let cardStyleInterpolator = forHorizontalIOS;
    if (vertical) {
      cardStyleInterpolator = Platform.OS === 'ios' ? forVerticalIOS : RevealFromBottomAndroidSpec;
    }
    return {
      mode: 'card',
      cardStyleInterpolator,
    };
  };

  // Hide the splash screen on mount
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          <PaperProvider>
            <BugsnagNavigationContainer linking={linking} ref={navigationRef}>
              <Navigator
                screenOptions={{ gestureEnabled: true }}
                headerMode="none"
                headerShown={false}>
                {routes.map(route => (
                  <Screen
                    name={route.name}
                    component={route.component}
                    key={route.name}
                    options={getOptions(!!route.vertical)} />
                ))}
              </Navigator>
            </BugsnagNavigationContainer>
          </PaperProvider>
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
      </SafeAreaProvider>
    </ReduxProvider>
  );
};

export default App;
