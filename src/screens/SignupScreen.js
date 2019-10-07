import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      {/* Same shit */}
      {/* <Input label="Email" value={email} onChangeText={newEmail => setEmail(newEmail)} /> */}
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer>
        <Button title="Sign Up" onPress={() => navigation.navigate('Signin')} />
      </Spacer>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    header: null,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
})

export default SignupScreen