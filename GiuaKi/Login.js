import {Alert, Image, StyleSheet, View, Text} from 'react-native';
import {Button, HelperText, TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import React, {useEffect} from 'react';
import '@react-native-firebase/app';
import {login, useMyContextController} from '../store';

function Login({navigation}) {
  const [controller, dispatch] = useMyContextController();
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const {userLogin} = controller;
  const [error, setError] = React.useState('');
  const [errorPass, setErrorPass] = React.useState('');

  useEffect(() => {
    if (userLogin != null) {
      navigation.navigate('Home');
    }
    console.log(userLogin);
  }, [navigation, userLogin]);

  const handleLogin = () => {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(regEmail)) {
      setError('Invalid Email Address');
    } else if (pass.length < 6) {
      setErrorPass('Password need 6 keywords or more');
    } else login(dispatch, email, pass);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 15}}>
      <Image
        source={require('../asset/R.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <TextInput
        label={'Email'}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        underlineColor="#fff"
      />
      {error && <HelperText type="error">{error}</HelperText>}
      <TextInput
        secureTextEntry
        label={'Password'}
        value={pass}
        onChangeText={setPass}
        style={styles.input}
        underlineColor="#fff"
      />
      {errorPass && <HelperText type="error">{errorPass}</HelperText>}
      <Button
        style={{borderRadius: 0, backgroundColor: '#4169e1'}}
        mode="contained"
        onPress={handleLogin}>
        <Text style={{color: '#fff'}}>Login</Text>
      </Button>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 50,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <Button
          style={{borderRadius: 0}}
          textColor="blue"
          onPress={() => navigation.navigate('Register')}>
          <Text style={{color: '#000'}}>Don't have an account? </Text>Create
          account
        </Button>
        {/* <Button onPress={() => navigation.navigate('ForgotPass')}>
          Forgot password
        </Button> */}
      </View>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    // aspectRatio: 1,
    flex: 1,
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});
