import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MyTab from './navigation';
import { Provider } from "react-redux";
import store from './store'


export default function App() {
  // Đẩy thanh navigation lên bên trên nút home của android
  return (
    <SafeAreaProvider>
      <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}> 
          <MyTab />
        </SafeAreaView>
      </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
