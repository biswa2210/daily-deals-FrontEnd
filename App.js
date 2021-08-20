/*
CREATED BY BISWARUP BHATTACHARJEE
EMAIL    : bbiswa471@gmail.com
PHONE NO : 6290272740
*/
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import DDSTORE from './ReduxDev/StoreOfDD';
import Toast from 'react-native-toast-message';

//Context Api
import Auth from './ContextApi/Store/Auth';


//Start - Screens--------------------------------------------------------------------->DailyDeals
import Header from './Shared/Header';
//End - Screens----------------------------------------------------------------------->DailyDeals
//Start - Navigations----------------------------------------------------------------->DailyDeals
import Main from './Navigators/Main';
//End - Navigations------------------------------------------------------------------->DailyDeals
LogBox.ignoreAllLogs(true);
export default function App() {
  return (
    <Auth>
      <Provider store={DDSTORE}>
        <NavigationContainer>
          <Header />
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
   
  );
}
