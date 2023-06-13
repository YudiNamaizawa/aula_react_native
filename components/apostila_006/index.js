import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

function Index() {

  const [massa, setMassa] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [grau, setGrau] = useState('');

  function Calcular(){
    const valor = massa/ (altura * altura);
    setResultado(valor);

    if (valor < 18.5){
        setGrau("Abaixo do Peso");
    } else if(valor >= 18.5 && valor <= 24.9){
        setGrau("Peso Normal");
    } else if(valor >= 25 && valor <= 29.9){
        setGrau("Sobrepeso");
    } else if(valor >= 30 && valor  <= 34.9){
        setGrau("Obesidade Grau 1");
    } else if(valor >= 35 && valor  <= 39.9){
        setGrau("Obesidade Grau 2");
    } else if (valor > 40){
        setGrau("Obesidade Grau 3");
    }
  }

    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>Apostila 6</Text>
            <View style={styles.entradaImc} >
                <TextInput 
                placeholder='Massa' 
                placeholderTextColor='lightgray' 
                keyboardType='numeric' 
                style={styles.input}
                onChangeText={(entrada) => setMassa(entrada)}
                />
                <TextInput 
                placeholder='Altura' 
                placeholderTextColor='lightgray' 
                keyboardType='numeric' 
                style={styles.input}
                onChangeText={(entrada) => setAltura(parseFloat(entrada.replace(',','.')))}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => Calcular()}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>
            <Text style={styles.resultadosImc}>{grau}</Text>
        </View>
    );
}

export default Index;