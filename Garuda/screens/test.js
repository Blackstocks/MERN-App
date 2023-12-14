import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#6B52AE', padding: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1 }}>
          <TextInput
            style={{ backgroundColor: 'white', padding: 10, borderRadius: 5 }}
            placeholder="Email Address"
            placeholderTextColor="#BEBEBE"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={{ width: 10 }} />
        <View style={{ flex: 1 }}>
          <TextInput
            style={{ backgroundColor: 'white', padding: 10, borderRadius: 5 }}
            placeholder="Password"
            placeholderTextColor="#BEBEBE"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFC107',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
          }}
          onPress={handleLogin}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity>
          <Text style={{ color: 'white', textAlign: 'center' }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity>
          <Text style={{ color: 'white', textAlign: 'center' }}>Don't have an account? Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;