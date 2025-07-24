import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'

export default function ForgotPasswordPage() {
const [email, setEmail] = useState('')
const router = useRouter()

const handleRegister = () => {
  /**
   * Handle the register form submission.
   *
   * If the email, phone, or password field is empty, show an alert error.
   * Otherwise, navigate to the verification page.
   */
    if (!email) {
      Alert.alert('Error', 'All fields are required!')
      return
    }
    router.push('/verification')
  }

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center', backgroundColor: 'white', paddingBottom: 280 }}>
      {/* Logo */}
      <View style={{ alignItems: 'center', marginBottom: 32 }}>
        <Image
          source={require('../assets/images/logo.png')} // ganti sesuai path logo kamu
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
        />
      </View>

      {/* Form */}
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>Enter your email to recover your account</Text>

        <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        placeholderTextColor="#444" // warna placeholder abu-abu gelap
        value={email}
        onChangeText={setEmail}
        />

      {/* Register Button */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Submit</Text>
      </TouchableOpacity>


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
  }
})
