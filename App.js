import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, FlatList, StyleSheet} from 'react-native';
import Signup from './screen/Signup';

import {
  Appbar,
  Button,
  Divider,
  PaperProvider,
  TextInput,
} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './routers/MyStack';
import Signin from './screen/Signin';
import {MyContextControllerProvider} from './store';
import Login from './GiuaKi/Login';
import Register from './GiuaKi/Register';
import Home from './GiuaKi/Home';
// import firestore from '@react-native-firebase/firestore';
// import Todo from './Todos/todo';

const App = () => {
  return (
    // <MyContextControllerProvider>
    //   {/* <View style={{flex: 1}}> */}
    //   {/* <Signup /> */}
    //   {/* <Signin /> */}
    //   <PaperProvider>
    //     <NavigationContainer>
    //       <MyStack />
    //     </NavigationContainer>
    //   </PaperProvider>
    //   {/* </View> */}
    // </MyContextControllerProvider>

    // <PaperProvider>
    //   <NavigationContainer>
    //     <MyStack />
    //   </NavigationContainer>
    // </PaperProvider>
    <View style={{flex: 1}}>
      <MyContextControllerProvider>
        <PaperProvider>
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
        </PaperProvider>
      </MyContextControllerProvider>
      {/* <Home /> */}
    </View>
  );
};
export default App;
