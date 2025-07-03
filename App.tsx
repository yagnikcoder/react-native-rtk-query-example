import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import ReduxExample from './src/reduxExample';
import { Provider } from 'react-redux';
import { store, persistor } from './src/reduxtoolkit/store';
import ItemListScreen from './src/itemListScreen';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReduxExample/>
        <ItemListScreen/>
      </PersistGate>
    </Provider>
  );
}

export default App;
