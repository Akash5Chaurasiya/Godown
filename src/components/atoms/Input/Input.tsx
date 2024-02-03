import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = ({ value, onChangeText, placeholder, secureText }: any) => {
    return (
        <View style={{ width: 240, alignSelf: 'center', borderRadius: 3, borderColor: '#F1F0F0',borderWidth:1 }}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={'#B0B0B0'}
                secureTextEntry={secureText}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({})