import { AppState, AppStateStatus, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const useIsForeground = () => {
    const [isForeground, setIsForeground] = useState(true)
    useEffect(() => {
        const onChange = (state: AppStateStatus) => {
            setIsForeground(state === 'active')
        }
        const listener = AppState.addEventListener('change', onChange)
        return () => listener.remove()
    }, [])
    return isForeground
}

export default useIsForeground

const styles = StyleSheet.create({})