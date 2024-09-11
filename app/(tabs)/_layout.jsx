import { View, Text } from 'react-native'
import { Redirect, Tabs } from "expo-router";
import React from 'react'

import { icons } from '../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image 
      source={icon}
      resizeMode="contain"
      tintcolor={color}
      className="w-6 h-6"
      />
      <Text className={'${focused ? "font-psemibold" : "font-pregular"} text-xs'}>
      style={{ color: color }}
      {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs>
      <Tabs.Screen 
       options={{
        title: "Home",
        headerShown: false, 
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused}
      />
        )
      }}
      />
    </Tabs>
    </>
  )
}

export default TabsLayout