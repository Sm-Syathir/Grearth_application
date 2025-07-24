import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, StyleSheet } from 'react-native'
import HeaderButtons from './components/HeaderButton'

export default function YourScreen() {
  return (
    <><LinearGradient
      colors={['#ffffcc', '#ccffcc']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      {/* Matahari */}
      <View style={styles.sun} />

      {/* Konten */}
      <View style={styles.content}>
      </View>
    </LinearGradient><View style={{ flex: 1 }}>
        <HeaderButtons />

        {/* ... konten lainnya ... */}
      </View></>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    borderRadius: 30,
    overflow: 'hidden',
    paddingTop: 60
  },
 sun: {
  position: 'absolute',
  top: -50,
  left: '41%',
  transform: [{ translateX: -50 }],
  width: 170,
  height: 170,
  borderRadius: 85, // setengah dari width/height
  backgroundColor: '#fff176a6', // kuning cerah
  zIndex: 1,
  opacity: 0.8,

  // Efek blur dengan bayangan (shadow)
  shadowColor: '#fff176',
  shadowOffset: { width: 8, height: 30 },
  shadowOpacity: 10, // antara 0 - 1
  shadowRadius: 20, // semakin besar, semakin blur
  elevation: 20, // untuk efek di Android
},
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})
