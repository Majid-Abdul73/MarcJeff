import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import SwitchToggle from 'react-native-switch-toggle';
import { useWaterLevel } from '../context/WaterLevelContext';

const PumpControlScreen = () => {
  const navigation = useNavigation();
  const { isPumpOn } = useWaterLevel();

  // const handleManualToggle = async () => {
  //   const newManualStatus = !isManualOn;
  //   await updateManualStatus(newManualStatus);
  //   Alert.alert(`Manual Control ${newManualStatus ? 'ON' : 'OFF'}`);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Water Pump</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>Pump Status</Text>
        <Text style={styles.statusValue}>{isPumpOn ? 'ON' : 'OFF'}</Text>
      </View>
{/* 
      <Text style={styles.sectionTitle}>Manual Controls</Text>
      <View style={styles.controlContainer}>
        <View style={styles.controlTextContainer}>
          <Text style={styles.controlTitle}>{isManualOn ? 'Turn Off' : 'Turn On'}</Text>
          <Text style={styles.controlDescription}>
            {isManualOn ? 'Stop the pump manually' : 'Start the pump manually'}
          </Text>
        </View> 

        <SwitchToggle
          switchOn={isManualOn}
          onPress={handleManualToggle}
          circleColorOff="#FFF"
          circleColorOn="#FFF"
          backgroundColorOn="#3EB170"
          backgroundColorOff="#333333"
          containerStyle={styles.switchContainer}
          circleStyle={styles.switchCircle}
        />
      </View> */}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Authentication')}>
          <Ionicons name="home-outline" size={24} color="#FFFFFF" />
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
          <Ionicons name="apps-outline" size={24} color="#FFFFFF" />
          <Text style={styles.buttonText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PumpControl')}>
          <Ionicons name="water-outline" size={24} color="#FFFFFF" />
          <Text style={styles.buttonText}>Pump</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#3EB170',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop:20,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    marginTop: 55,
  },
  statusLabel: {
    color: '#FFFFFF',
    fontSize: 25,
  },
  statusValue: {
    color: '#87CEEB',
    fontSize: 25,
    borderWidth: 5,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    marginTop: 80,
    fontWeight: 'bold',
    padding: 16,
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  controlTextContainer: {
    flex: 1,
  },
  controlTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  controlDescription: {
    color: '#CBCBCB',
    fontSize: 14,
  },
  switchContainer: {
    width: 60,
    height: 30,
    borderRadius: 25,
    padding: 5,
  },
  switchCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#333333',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    marginTop: 8,
  },
});

export default PumpControlScreen;