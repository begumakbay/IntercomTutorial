import React, { Component } from 'react'
import { SafeAreaView, View, Button, StyleSheet } from 'react-native'

import Intercom from 'react-native-intercom'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button
          title="Open Intercom Chat"
          onPress={() => {
            Intercom.registerIdentifiedUser({ userId: 'id_' + Math.random() })
            Intercom.displayMessageComposer()
          }}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    justifyContent: 'center',
  },
})
