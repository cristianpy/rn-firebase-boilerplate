import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import { goToAuth } from './navigation'
import {Navigation} from 'react-native-navigation';
import Service from './Service';

export default class Home extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home'
        },
      }
    };
  }
  logout = () => {
    Service.removeItem("USER_KEY")
      .then((result) => {
        console.log(result);
        goToAuth();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    console.log('props; ', this.props)
    return (
      <View style={styles.container}>
        <Text>Hola desde Home screen.</Text>
        <Button
          onPress={this.logout}
          title="Cerrar Sesión"
        />
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'Screen2',
              }
            });
          }}
          title="Ver siguiente screen"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})