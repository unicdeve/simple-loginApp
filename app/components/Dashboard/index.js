import React, { Component } from 'react';
import { View, TextInput, Text} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'

export default class Dashboard extends Component {
  render() {
    return (
      <PaperProvider>
        <View>
            <Text>Dashboard</Text>
        </View>
      </PaperProvider>
    )
  }
}
