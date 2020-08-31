import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NativeModules,
  NativeEventEmitter
} from 'react-native';


import Razorpay from 'react-native-customui';

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {
          var options = {
            description: 'Credits towards consultation',
            currency: 'INR',
            key_id: 'rzp_test_KbIcnUR8wJc20i',
            amount: '5000',
            email: 'gaurav.kumar@example.com',
            contact: '9123456780',
            method: 'card',
            'card[name]': 'Gaurav Kumar',
            'card[number]': '4111111111111111',
            'card[expiry_month]': '12',
            'card[expiry_year]': '20',
            'card[cvv]': '100',
          }
          Razorpay.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
          }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
        }}>
          <Text style={styles.text}>ORDER ID</Text>
        </TouchableHighlight>


      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 150
  }
});

export default App;