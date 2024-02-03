import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AddIcon, Button, ButtonIcon, ButtonText, Icon, Image, Menu, MenuItem, MenuItemLabel, SettingsIcon } from '@gluestack-ui/themed'
import ImageIndex from '../../theme/AssestIndex'
import { useAuthContext } from '../../components/auth/AuthGuard'

const Navbar = ({ navigation }: any) => {
    const auth: any = useAuthContext()
    return (
        <SafeAreaView style={{ borderColor: '#DEDEDE', borderWidth: 1, padding: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Image
                    size="sm"
                    source={ImageIndex.cac}
                    alt="User Logo"
                    style={{ resizeMode: 'contain' }}
                />
                <Menu
                    placement="top"
                    trigger={({ ...triggerProps }) => {
                        return (
                            <Button {...triggerProps}>
                                <ButtonText>Menu</ButtonText>
                            </Button>
                        )
                    }}
                >
                    <MenuItem key="Community" textValue="Community" onPress={() => auth.actions.logout()}>
                        <Icon as={SettingsIcon} size="sm" mr="$2" />
                        <MenuItemLabel size="sm">Logout</MenuItemLabel>
                    </MenuItem>
                </Menu>
            </View>
        </SafeAreaView>
    )
}

export default Navbar

const styles = StyleSheet.create({})