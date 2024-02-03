import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, ButtonText, HStack, Spinner } from '@gluestack-ui/themed'
import { Text } from '@gluestack-ui/themed'

const ButtonIcon = ({ handleSubmit, loading }: any) => {
    return (
        <View style={{ width: 240, borderRadius: 8, alignSelf: 'center',marginTop:20 }}>
            <Button bgColor='#1E293B' size="xl" onPress={() => handleSubmit()}>
                {!loading.loading ?
                    (<ButtonText>Login</ButtonText>)
                    :
                    (
                        <HStack space="sm">
                            <Spinner color="white" />
                            <Text color='white' size="md">Please Wait...</Text>
                        </HStack>
                    )
                }
            </Button>
        </View>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({})