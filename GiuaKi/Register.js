/* eslint-disable react-native/no-inline-styles */
import {Alert, StyleSheet, View, Image} from 'react-native';
import {Button, Text, TextInput, HelperText} from 'react-native-paper';
import React from 'react';
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/app';
import {signup} from '../store';

function Register({navigation}) {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [fullname, setFullname] = React.useState('');
  const [errorEmail, setErrorEmail] = React.useState('');
  const [errorPass, setErrorPass] = React.useState('');
  const [errorFullname, setErrorFullname] = React.useState('');
  const [confirmpass, setConfirmpass] = React.useState('');
  const [errorconfirmpass, setErrorConfirmpass] = React.useState('');
  const handleCreateAccount = () => {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(regEmail)) {
      setErrorEmail('Invalid Email Address');
    } else if (fullname === '') {
      setErrorFullname('Invalid fullname');
    } else if (pass.length < 6) {
      setErrorPass('Password need 6 keywords or more');
    } else if (confirmpass !== pass) {
      setErrorConfirmpass('Dont match');
    } else signup(email, pass, fullname);
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
        underlineColor="#fff"
        style={styles.input}
      />
      {errorEmail && <HelperText type="error">{errorEmail}</HelperText>}
      <TextInput
        secureTextEntry
        label={'Password'}
        value={pass}
        onChangeText={setPass}
        underlineColor="#fff"
        style={styles.input}
      />
      {errorPass && <HelperText type="error">{errorPass}</HelperText>}
      <TextInput
        label={'Full Name'}
        value={fullname}
        onChangeText={setFullname}
        underlineColor="#fff"
        style={styles.input}
      />
      {errorFullname && <HelperText type="error">{errorFullname}</HelperText>}
      <TextInput
        secureTextEntry
        label={'Confirm Password'}
        value={confirmpass}
        onChangeText={setConfirmpass}
        underlineColor="#fff"
        style={styles.input}
      />
      {errorconfirmpass && (
        <HelperText type="error">{errorconfirmpass}</HelperText>
      )}
      <Button
        style={{borderRadius: 0, backgroundColor: '#4169e1'}}
        mode="contained"
        textColor="#fff"
        onPress={handleCreateAccount}>
        Create account
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
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#000'}}>Already got an account </Text>
          Login account
        </Button>
      </View>
    </View>
  );
}
export default Register;
const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginBottom: 10,
    // aspectRatio: 1,
    flex: 1,
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});
