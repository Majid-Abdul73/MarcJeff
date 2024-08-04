import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SvgXml } from 'react-native-svg';
import supabase from '../supabaseClient';

const waterDropSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="#3EB170" d="M12 2C7.03 2 3 6.03 3 11c0 2.11.77 4.04 2.04 5.56l.01.01c.
    03.04.07.09.11.13L12 22l6.84-5.3c.04-.04.08-.09.11-.13l.01-.01C20.23 15.04 21 13.11
    21 11c0-4.97-4.03-9-9-9zm2.78 14.61l-3.78-2.93V7h2v6.68l2.5 1.94-1.5 1.16zM12 18l-5.5
    -4.26L9 9.68V3h2v6.68l2.5 1.94L12 18z"/>
  </svg>`;

const plusSvg = `
  <?xml version="1.0" encoding="utf-8"?> 
  <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
  <svg width="20" height="20" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path fill="#ff9800" d="M13 5.2V4h-3V1H8.8v3H7.6V1H6.4v3H5.2V1H4v3H1v1.2h3v1.2H1v1.2h3v1.2H1V10h3v3h1.2v-3h1.2v3h1.2v-3h1.2v3H10v-3h3V8.8h-3V7.6h3V6.4h-3V5.2h3z"/>
    <path fill="#4caf50" d="M2.2 3.4v7.2c0 .66.54 1.2 1.2 1.2h7.2c.66 0 1.2-.54 1.2-1.2V3.4c0-.66-.54-1.2-1.2-1.2H3.4c-.66 0-1.2.54-1.2 1.2z"/>
    <path fill="#37474f" d="M9.1 9.1H4.9c-.33 0-.6-.27-.6-.6v-3c0-.33.27-.6.6-.6h4.2c.33 0 .6.27.6.6v3c0 .33-.27.6-.6.6z"/>
  </svg>`;

const AuthenticationScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Rapid development mode: bypass actual authentication
    if (email === 'D11' && password === '0011') {
      navigation.navigate('Dashboard');
    } else {
      try {
        const { data: { user }, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          console.error("Login error:", error.message);
          Alert.alert("Login error", error.message);
        } else {
          console.log("Login successful:", user);
          navigation.navigate('Dashboard');
        }
      } catch (error) {
        console.error("Unexpected error during login:", error);
        Alert.alert("Unexpected error", error.message);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.topContainer}>
        <SvgXml xml={waterDropSvg} width="40" height="40" style={styles.logo} />
        <Text style={styles.title}>Water Level Monitoring and Control System</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image source={require('../assets/water_tank.png')} style={styles.image} />
        </View>
        <Text style={styles.subtitle}>Welcome back</Text>
        <Text style={styles.welcomeMessage}>Sign in to continue</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your ID"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#CBCBCB"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#CBCBCB"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>A final year project presented by: {'\n'} {'\n'}
        <Text style={styles.name}> ATTIPOE MARCUS.. {'\n'} ABRAHAM JEFFERY..</Text> {'\n'}
        </Text>
        <SvgXml xml={plusSvg} width="40" height="30" style={styles.plusIcon} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  topContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    backgroundColor: 'black',
  },
  logo: {
    marginRight: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingTop: 100,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 160,
    marginTop: -25,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  welcomeMessage: {
    color: '#CBCBCB',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    color: '#FFFFFF',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3EB170',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#333333',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  name: {
    color: '#87CEEB',
    fontWeight: 'bold',
    fontSize: 12,
  },
  plusIcon: {
    marginLeft: 10,
  },
});

export default AuthenticationScreen;
