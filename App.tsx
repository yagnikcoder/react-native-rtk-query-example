import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import ReduxExample from './src/reduxExample';
import { Provider } from 'react-redux';
import store from './src/reduxtoolkit/store';
import ItemListScreen from './src/itemListScreen';

function App() {
  return (
    <Provider store={store}>
      <ReduxExample/>
      <ItemListScreen/>
    </Provider>
  );
}



export default App;
