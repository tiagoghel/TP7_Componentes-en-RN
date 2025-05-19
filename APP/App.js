import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';


const imagenFondo = {
  uri: 'https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.bolavip.com%2Fwebp%2Fcl%2Ffull%2FBCL_20250331_BCL_326557_Carlos_palacios-1.webp&width=490&height=275',
};

const imagenTiago = {
  uri: 'https://ds-images.bolavip.com/news/image?src=https://images.bolavip.com/webp/cl/full/BCL_20250331_BCL_326557_palacios-carlos-2-1024x761_ed0a76e9.webp&width=1024&height=761',
};

export default function App() {
  const [Mensaje, CambiarMensaje] = useState('');

  const Aletar = () => {
    alert(Mensaje);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ImageBackground
        source={imagenFondo}
        resizeMode="cover"
        style={styles.ImageBackground}
      >
        <View style={styles.overlay}>
          <Image
            source={imagenTiago}
            resizeMode="cover"
            style={styles.Image}
          />

          <Text style={styles.titulo}>Buen ser humano, mejor robot</Text>
          <Text style={styles.nombre}>Tiago Ghelman</Text>

          <TextInput
            style={styles.inputtext}
            placeholder="Ingrese un comentario"
            placeholderTextColor="#ccc"
            onChangeText={CambiarMensaje}
            value={Mensaje}
          />

          <TouchableOpacity style={styles.Button} onPress={Aletar}>
            <Text style={styles.ButtonText}>Contactar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  Image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  titulo: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nombre: {
    fontSize: 16,
    color: '#FFA500',
    marginBottom: 30,
  },
  inputtext: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  Button: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  ButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
