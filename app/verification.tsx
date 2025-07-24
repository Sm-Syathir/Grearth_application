import React, { useRef, useState } from 'react'
import { Link } from 'expo-router'
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'

export default function RegisterPage() {
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null)
  ]

  const [code, setCode] = useState(['', '', '', ''])

  const handleChange = (text: string, index: number) => {
    const newCode = [...code]
    newCode[index] = text
    setCode(newCode)

    // Jika user ketik angka, pindah ke kanan
    if (text.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus()
    }
  }

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '') {
      if (index > 0) {
        inputRefs[index - 1].current?.focus()
        const newCode = [...code]
        newCode[index - 1] = ''
        setCode(newCode)
      }
    }
  }

  const handleVerify = () => {
    if (code.some(char => char === '')) {
      Alert.alert('Error', 'Please enter the complete verification code.')
      return
    }

    const fullCode = code.join('')
    console.log('Verification code:', fullCode)
  }

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center', backgroundColor: 'white', paddingBottom: 300 }}>
      {/* Logo */}
      <View style={{ alignItems: 'center', marginBottom: 32 }}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
        />
      </View>

      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        Enter the verification code received on your email
      </Text>

      <View style={styles.container}>
        {inputRefs.map((ref, index) => (
          <TextInput
            key={index}
            ref={ref}
            style={styles.inpu}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            value={code[index]}
          />
        ))}
      </View>

      <Link href="/home" asChild>
  <TouchableOpacity style={styles.button}>
    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
      Verify
    </Text>
  </TouchableOpacity>
</Link>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <Text style={{ color: '#000' }}>Didn't receive the code? </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ color: '#2d6636', fontWeight: 'bold' }}>Resend</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    gap: 10
  },
  inpu: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    width: 60,
    height: 60,
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: '#f1f1f1'
  },
  button: {
    backgroundColor: '#2E5623',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center'
  }
})
