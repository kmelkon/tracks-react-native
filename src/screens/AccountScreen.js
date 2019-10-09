import React, { useContext } from 'react'
import { Text, StyleSheet, StatusBar } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'

import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
  const { signout } = useContext(AuthContext)
  return (
    <SafeAreaView foreInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48, paddingTop: StatusBar.currentHeight }}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default AccountScreen
