import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Odance = () => {
  return (
    <View style={styles.container}>
      <Text>Odance</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue'}}>Go To Profile</Link>
    </View>
  );
}

export default Odance

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})