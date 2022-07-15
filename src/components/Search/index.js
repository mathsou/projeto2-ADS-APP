import React, { Component } from 'react';
import { TextInput } from 'react-native'
import { View } from 'react-native';
import styles from './styles';

const Search = ({event, value}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                placeholder="Digite o número do pedido..."
                value={value}
                onChangeText={event}
            />
        </View>
    );
}

export default Search;