import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screen/Signup';
import Signin from '../screen/Signin';
import ForgotPass from '../screen/ForgotPass';
import Admin from '../screen/Admin';
import Customer from '../screen/Customer';
import Login from '../GiuaKi/Login';
import Register from '../GiuaKi/Register';
import Home from '../GiuaKi/Home';
import {Button} from 'react-native';
import {logout, useMyContextController} from '../store';
import {useEffect} from 'react';

const Stack = createStackNavigator();
const MyStack = ({navigation}) => {
  const [controller, dispatch] = useMyContextController();
  const {userLogin} = controller;

  return (
    <Stack.Navigator initialRouteName="Login">
      {/* <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="Customer" component={Customer} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} /> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleStyle: {fontStyle: 'italic'},
          title: 'Hello ' + (userLogin != null && userLogin.fullname),
          headerTitleAlign: 'center',
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};
export default MyStack;
