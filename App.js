import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');
  const [imagem, setImagem] = useState(require('./assets/bomba.jpg'));

  const calcularCombustivel = () => {
    if (precoAlcool && precoGasolina) {
      const custoRelativo = parseFloat(precoAlcool) / parseFloat(precoGasolina);

      if (custoRelativo > 0.7) {
        setResultado('Agora só o carro vai beber!');
        setImagem(require('./assets/gasolina.jpg'));
      } else {
        setResultado('Vai ter que gastar com você e com o carro hoje!');
        setImagem(require('./assets/alcool.jpg'));
      }
    } else {
      setResultado('');
      setImagem(require('./assets/bomba.jpg')); // Define a imagem de fundo padrão
    }
  };

  return (
    <ImageBackground source={imagem} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Álcool ou Gasolina?</Text>

        <TextInput
          style={styles.input}
          placeholder="Preço do Álcool por litro"
          onChangeText={text => setPrecoAlcool(text.replace(',', '.'))}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Preço da Gasolina por litro"
          onChangeText={text => setPrecoGasolina(text.replace(',', '.'))}
          keyboardType="numeric"
        />

        <Button title="Calcular" onPress={calcularCombustivel} />

        {resultado ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{resultado}</Text>
          </View>
        ) : null}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: 'white', 
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    backgroundColor: 'white', 
  },
  resultContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    marginBottom: 16,
    color: 'white', // Cor do texto do resultado
  },
});

export default App;
