import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { colors } from '../../theme/colors';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TARNISHED GUIDE</Text>

      <TextInput
        style={styles.input}
        placeholder="EMAIL"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="SENHA"
        placeholderTextColor="#666"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.replace('MainApp')}
      >
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: colors.gold,
    marginBottom: 60,
    letterSpacing: 4,
  },
  input: {
    width: '100%',
    height: 55,
    backgroundColor: colors.card,
    borderRadius: 8,
    paddingHorizontal: 20,
    color: colors.text,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 55,
    backgroundColor: colors.gold,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    color: colors.textLight,
    marginTop: 25,
  },
});

export default LoginScreen;