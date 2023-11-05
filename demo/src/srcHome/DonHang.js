import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const TopTab = createMaterialTopTabNavigator();

const DonHang = () => {
    return (
      <TopTab.Navigator>
       Hello
      </TopTab.Navigator>
    );
  };
  export default DonHang;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' ,
      backgroundColor:"red"
    }
  });