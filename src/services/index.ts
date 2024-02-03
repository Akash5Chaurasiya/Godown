import axios, { AxiosError } from "axios";
import { Alert } from "react-native";

export const apiCall = async <R, D = {}>(method: 'get' | 'post' | 'patch' | 'delete', url: string, data?: D): Promise<R> => {
    try {
        const response = await axios({
            method,
            url,
            data,
            withCredentials: true
        })
        if (response.data.success === true) {
            return response.data;
        } else {
            Alert.alert(response.data.message)
            return response.data;
        }
    } catch (err) {
        if (err instanceof AxiosError && err.response) {
            if (err.response.data.success === true || err.response.data.success === false) {
                Alert.alert(err.response.data.message)
                return err.response.data;
            } else {
                Alert.alert("No Response From Server")
                return {
                    success: false,
                    message: "No Response From Server"
                } as R;
            }
        } else {
            Alert.alert("No Response From Server")
            return {
                success: false,
                message: "No Response From Server"
            } as R;
        }
    }
}