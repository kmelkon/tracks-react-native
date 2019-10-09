import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

import Spacer from './Spacer'

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    color: '#3498DB',
  },
})

export default withNavigation(NavLink)
