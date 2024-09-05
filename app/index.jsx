import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Odance = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Odance</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: 'blue'}}>Go To Home</Link>
    </View>
  );
}
