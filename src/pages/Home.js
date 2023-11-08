import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){
    let [real, setReal] = useState();
    let [cotacao, setCotacao] = useState();
    let [total, setTotal] = useState();

    function ConverterDolar(){
        let dolar =parseFloat(real)/parseFloat(cotacao);    
        setTotal(dolar);
        alert(real+ " R$ é igual a: " +total+ " US$");
    }
    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Conversor para Dolár</Text>
            <TextInput style={styles.input} onChangeText={setReal} placeholder="Valor em Real"></TextInput>
            <TextInput style={styles.input} onChangeText={setCotacao} placeholder="Cotação de Hoje"></TextInput>
            <TouchableOpacity style={styles.button} onPress={ConverterDolar}>
                <Text style={styles.buttonText}>Converter</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#D6FFB3',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: 'white',
        color: 'black',
        marginTop: 30,
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        width: 150
    },
    button:{
        backgroundColor: '#13FF00',
        color: 'white',
        marginTop: 30,
        padding: 10,
        borderRadius: 10,
        width: 200,
    },
    buttonText:{
        fontSize:20,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 500
    }
})