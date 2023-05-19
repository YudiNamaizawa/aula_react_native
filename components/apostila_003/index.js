import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Index() {

    const [numero, setNumero] = useState(0);

    function addNumber(){
        setNumero(numero + 1)
    }

    function minusNumber(){
        setNumero(numero - 1)
    }

    function zeroNumber(){
        setNumero(numero - numero)
    }

  return(
    <View style={styles.container}>
        <Text style={styles.paragraph}>
            Exemplo 3
        </Text>  
            <View style={styles.counter}>
                <View style={styles.row}>

                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => addNumber()}
                    >
                        <Text style={styles.textButton}>
                            +1
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.textCounter}>{numero}</Text>               

                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => minusNumber()}
                    >
                        <Text style={styles.textButton}>
                            -1
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity 
                    style={styles.buttonzero}
                    onPress={() => zeroNumber()}
                >
                    <Text style={styles.textButton}>
                        Zerar
                    </Text>
                </TouchableOpacity>
            </View>
    </View>
  );
}