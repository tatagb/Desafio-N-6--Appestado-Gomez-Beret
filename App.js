import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { sumarContador, restarContador } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import store from './store';

const fondoDesafioRedux = require("./assets/fondoDesafioRedux.jpg")

const App = () => {
  const contador = useSelector(state => state.contador);
  const dispatch = useDispatch();

  const handleSuma = () => {
    dispatch(sumarContador());
  };

  const handleResta = () => {
    dispatch(restarContador());
  };

  return (
    <ImageBackground source={fondoDesafioRedux} resizeMode="cover" style={styles.fondo}>
      <View style={styles.container}>
        <Text style={styles.texto}>CONTADOR: {contador}</Text>
        <TouchableOpacity style={styles.button} onPress={handleSuma}>
          <Text style={styles.buttonText}>SUMAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleResta}>
          <Text style={styles.buttonText}>RESTAR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const AppEnvoltorio = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppEnvoltorio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  texto: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 70,
    color: "white"
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
    margin: 20
  },
  fondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%"
  }
});
