import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { useState } from 'react'

export default function RegisterPage() {
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [password, setPassword] = useState('')
const router = useRouter()

  const handleRegister = () => {
  /**
   * Handle the register form submission.
   *
   * If the email, phone, or password field is empty, show an alert error.
   * Otherwise, navigate to the verification page.
   */
    if (!email || !phone || !password) {
      Alert.alert('Error', 'All fields are required!')
      return
    }
    router.push('/verification')
  }

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center', backgroundColor: 'white' }}>
      {/* Logo */}
      <View style={{ alignItems: 'center', marginBottom: 32 }}>
        <Image
          source={require('../assets/images/logo.png')} // ganti sesuai path logo kamu
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
        />
      </View>

      {/* Form */}
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>Sign up</Text>

      <TextInput
        placeholder="Enter your Email"
        placeholderTextColor="#999"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Enter your phone number"
        placeholderTextColor="#999"
        style={styles.input}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        placeholder="Enter your Password"
        placeholderTextColor="#999"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Register Button */}
  <TouchableOpacity style={styles.button} onPress={handleRegister}>
    <Text style={{ color: 'white', fontWeight: 'bold' }}>
      Register
    </Text>
  </TouchableOpacity>

      {/* OR separator */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 24 }}>
        <View style={styles.line} />
        <Text style={{ marginHorizontal: 8 }}>or</Text>
        <View style={styles.line} />
      </View>

      {/* Social Icons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 24 }}>
        <Image source={require('../assets/images/Twitter.png')} style={styles.icon} />
        <Image source={require('../assets/images/Apple.png')} style={styles.icon} />
        <Image source={require('../assets/images/Google.png')} style={styles.icon} />
      </View>

      {/* Login Redirect */}
      <Text style={{ textAlign: 'center' }}>
        Already have an account?{' '}
        <Link href="/login" style={{ color: 'green' }}>
          Log in
        </Link>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create( {
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2E5623',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 12,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
})
