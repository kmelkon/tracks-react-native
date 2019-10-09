import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'

import Spacer from './Spacer'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
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
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <Spacer>
        <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: '#E74C3C',
    marginLeft: 15,
    marginTop: 15,
  },
})

export default AuthForm
