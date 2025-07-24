import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function Page3() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Recycling3.png')} // ganti sesuai nama file
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Help the environment{'\n'}while you earn
      </Text>

      <Text style={styles.description}>
        Amidst the threat of uncontrollable waste accumulation, Grearth comes as an integrated digital solution for efficient and sustainable waste management.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/register')} // ganti dengan route tujuan utama
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>

      <View style={styles.indicatorContainer}>
        <View style={styles.indicator} />
        <View style={styles.indicator} />
        <View style={[styles.indicator, styles.activeDot]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 350,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
    lineHeight: 34,
  },
  description: {
    textAlign: 'justify',
    fontSize: 14,
    color: '#333',
    marginBottom: 30,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#2E5623',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  indicatorContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ccc',
  },
  activeDot: {
    backgroundColor: '#2E5623',
  },
})
