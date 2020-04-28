import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button/Button';
import axios from 'axios';
// https://www.npmjs.com/package/axios
// https://scotch.io/tutorials/asynchronous-javascript-using-async-await
export default function App() {
  const printMyName = (nombre) => {
    console.log(`Hola soy ${nombre}`);
  };

  const [infoMorty, setInfoMorty] = useState(null);

  async function asyncFunc() {
    try {
      const data = await axios.get(
        'https://rickandmortyapi.com/api/character/2'
      );
      return data;
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(async () => {
    try {
      const response = await asyncFunc();
      setInfoMorty(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return infoMorty === null ? (
    <View style={styles.container}>
      <Text>Cargando</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text>Hola desde dispositivos móviles</Text>
      <Button
        text="Botón 1"
        imageUri={infoMorty.image}
        onPressButtonHandler={() => printMyName('Sebastián')}
      />
      <Button
        imageUri="https://chat.usc.edu.co/var/storagetheme/2019y/02/19/1/4809170f6a845a189b10829cf2428904.png"
        text="Botón 2"
        onPressButtonHandler={() => printMyName('Camilo')}
      />
      <Button
        imageUri="https://chat.usc.edu.co/var/storagetheme/2019y/02/19/1/4809170f6a845a189b10829cf2428904.png"
        text="Botón 3"
        onPressButtonHandler={() => printMyName('Nata')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
