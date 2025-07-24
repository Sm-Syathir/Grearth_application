import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function Page2() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Recycling2.png')} // ganti sesuai nama file kamu
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Recycle, waste{'\n'}management, garbage{'\n'}collectors
      </Text>

      <Text style={styles.description}>
        Smart Solutions for Waste Management in the Digital Age. With Us Turn Your Waste into Added Value. Let's Join the Journey to a Better Earth. With Grearth We Can Create Real Change. Start Now for a Greener Future.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/index3')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <View style={styles.indicatorContainer}>
        <View style={styles.indicator} />
        <View style={[styles.indicator, styles.activeDot]} />
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
    height: 250,
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
