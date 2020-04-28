import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const Button = ({ text, onPressButtonHandler, imageUri }) => {
  return (
    <TouchableOpacity
      onPress={onPressButtonHandler}
      style={{
        width: 100,
        height: 100,
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        style={styles.logo}
        source={{
          uri: imageUri,
        }}
      />
      {/* <Text style={styles.buttonText}>{text}</Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default Button;
