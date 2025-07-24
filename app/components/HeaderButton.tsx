import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'

export default function HeaderButtons() {
  return (
    <View style={styles.container}>
      <Link href="/profile" asChild>
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={28} color="#333" />
        </TouchableOpacity>
      </Link>

      <Link href="/search" asChild>
        <TouchableOpacity>
          <Feather name="search" size={26} color="#333" />
        </TouchableOpacity>
      </Link>

      <Link href="/notifications" asChild>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={26} color="#333" />
        </TouchableOpacity>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    marginHorizontal: 16,
  }
})
