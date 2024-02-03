import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { CloseIcon, Heading, Icon, MessageCircleIcon, ToastDescription, ToastTitle, VStack, useToast } from '@gluestack-ui/themed'
import { Pressable } from '@gluestack-ui/themed'
const Toast = ({ message }: any) => {
    const toast = useToast();
    const showToast = (message: any) => {
        const duration = 2000;
        const id = toast.show({
            placement: "top",
            duration: duration,
            render: ({ id }) => {
                const toastId = "toast-" + id;
                return (
                    <View style={styles.toastContainer} key={toastId}>
                        <VStack space="xs">
                            <ToastTitle color="$textLight50">New Message</ToastTitle>
                            <ToastDescription color="$textLight50">
                                {message}
                            </ToastDescription>
                        </VStack>
                        <Pressable style={{ top: 0, right: 0, position: 'absolute', padding: 8, }} mt="$1" onPress={() => toast.close(id)}>
                            <Icon as={CloseIcon} color="$coolGray50" />
                        </Pressable>
                    </View>
                );
            },
        });
        setTimeout(() => {
            toast.close(id);
        }, duration);
    };
    useEffect(() => {
        showToast(message)
    }, [message])
}
export default Toast
const styles = StyleSheet.create({
    toastContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#000',
        borderRadius: 10,
        width: '100%',
        alignSelf: 'center',
    },
})