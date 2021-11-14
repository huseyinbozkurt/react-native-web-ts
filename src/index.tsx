import {ReactElement} from 'react';
import {AppRegistry, Platform} from 'react-native';
import {Provider} from 'react-redux';
import {Navigation} from './navigation';
import store from './store';

export function App(): ReactElement {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

AppRegistry.registerComponent('example', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('example', {
    rootTag: document.getElementById('root'),
  });
}
