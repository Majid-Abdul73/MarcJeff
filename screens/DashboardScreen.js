import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { useWaterLevel } from '../context/WaterLevelContext';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const { waterLevel } = useWaterLevel();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Water Level Monitor</Text>
      </View>
      <Text style={styles.tankTitle}>Tank 1</Text>
      <View style={styles.progressContainer}>
        <Progress.Circle
          size={200}
          progress={waterLevel}
          showsText={true}
          formatText={() => `${Math.round(waterLevel * 100)}%`}
          textStyle={styles.progressText}
          color="#00FFFF"
          borderWidth={5}
          thickness={15}
          strokeCap="round"
        />
      </View>
      <Text style={styles.waterLevel}>Current water level: {Math.round(waterLevel * 100)}%</Text>
      <View style={styles.dataContainer}>
        <View style={styles.dataItem}>
          <Text style={styles.dataLabel}>Water Level</Text>
          <Text style={styles.dataValue}>{Math.round(waterLevel * 100)}%</Text>
        </View>
      </View>
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
    fontFamily: 'Manrope, Noto Sans',
  },
  header: {
    backgroundColor: '#3EB170',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  tankTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  progressContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  progressText: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
  },
  waterLevel: {
    fontSize: 20,
    color: '#CBCBCB',
    textAlign: 'center',
    marginBottom: 20,
  },
  dataContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  dataItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    marginTop: 30,
  },
  dataLabel: {
    fontSize: 20,
    color: '#CBCBCB',
  },
  dataValue: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
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

export default DashboardScreen;
