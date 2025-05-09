import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,TextInput,ImageBackground,Button,TouchableOpacity,Pressable,flex} from 'react-native';

const imagenTiago = requiere("./assets/Tiago.PNG")
export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="dark" />

      <ImageBackground
        source = {imagenTiago} 
        resizeMode='cover'
        style={styles.ImageBackground}>
      </ImageBackground>

      <Text style={styles.titulo}>Buen ser humano, mejor robot</Text>
      <Text style={styles.nombre}>Tiago Ghelman</Text>

    <TextInput
    style={styles.inputtext}
    placeholder='Ingrese un comentario'
    >
      
    </TextInput>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:
  {
    fontSize : 20 , 
    color : '#354666'
  },
  nombre:
  {
    fontSize : 16 , 
    color : '#FFA500'
  },
});
