import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'

const SelectedCard = ({ value, handlePress }: any) => {
    return (
        <View style={{ borderRadius: 4, padding: 10, backgroundColor: '#47556933', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: -50, width: 310, alignSelf: 'center' }}>
            <LinearGradient
                colors={['#D2D7DE', '#D1D5DB', '#CEBBC1']}
                locations={[0.6, 0.1, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.linearGradient}
            />
            <Text>{value}</Text>
            <TouchableOpacity onPress={handlePress}>
                <Icon name='trash-2' color={'#DC2626'} size={25} />
            </TouchableOpacity>
        </View>
    )
}

export default SelectedCard

const styles = StyleSheet.create({
    linearGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
})