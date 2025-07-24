import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useRouter } from 'expo-router'

export default function Index() {

  const router = useRouter()
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Recycling1.png')} // ganti dengan nama file gambar kamu
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome to{'\n'}Grearth</Text>

      <Text style={styles.description}>
        Grearth is an innovative application designed to facilitate effective and sustainable waste management. The app comes as a digital solution to the waste problem by connecting communities, waste collectors, and recycling facilities in one integrated platform. maria maria maria maria maria
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/index2')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <View style={styles.indicatorContainer}>
        <View style={[styles.indicator, styles.activeDot]} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 18,
    color: '#000',
  },
  description: {
    textAlign: 'justify',
    fontSize: 14,
    color: '#333',
    marginBottom: 30,
    
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
