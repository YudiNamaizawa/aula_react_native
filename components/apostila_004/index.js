import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

function Index() {

    const [valorNome, setValorNome] = useState('');
    const [valorSobrenome, setValorSobrenome] = useState('');
    const [mensagem, setMensagem] = useState('Inserir o nome e sobrenome');

    function Nome(){
        setMensagem(valorNome +" " + valorSobrenome)
        setValorNome('')
        setValorSobrenome('')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Apostila 4</Text>

            <Text style={styles.txtSaida}>{mensagem}</Text>

            <Text style={styles.txtView}>Nome</Text>
            <TextInput
                style={styles.txtEntrada}
                onChangeText={(saida) => setValorNome(saida)}
                value={valorNome}
            />
            <Text style={styles.txtView}>Sobrenome</Text>
            <TextInput
                style={styles.txtEntrada}
                onChangeText={(saida) => setValorSobrenome(saida)}
                value={valorSobrenome}
            />

            <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                    Nome()
                }}
            >
                <Text style={styles.textButton}>Exibir Texto</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Index;