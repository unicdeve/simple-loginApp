import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import styles from './styles';
import { DefaultTheme, Provider as PaperProvider, Button, Text, TextInput } from 'react-native-paper'

export default class Home extends Component {

  state = {
    username: "",
    password: ""
  }

  checkLogin() {
    const { username, password } = this.state;
    if( username == 'admin' && password == 'admin'){
      this.props.navigation.navigate('dashboard')
    } else {
      Alert.alert("Error", 'Username/password mismatch', [{
        text: "okay"
      }])
    }
  }
  

  render() {
    const theme = {
      ...DefaultTheme,
      roundness: 10,
      colors: {
        ...DefaultTheme.colors,
      }, 
      width: '60%'
    };

    const { heading, input, parent } = styles;
    return (
      <PaperProvider>
        <View style={parent}>
            <Text style={heading}>Login into the application</Text>

            <TextInput style={ input } placeholder="Username" onChangeText={text => this.setState({ username: text })} />
            
            <TextInput style={ input } secureTextEntry={true} placeholder="Password" onChangeText={text => this.setState({ password: text })} />
            <View style={{alignItems:'center', marginTop: 10}}>
              <Button theme={theme} mode="contained" onPress={() => this.checkLogin() }>
                Login
              </Button>
            </View>
        </View>
      </PaperProvider>
    )
  }
}
