import { apiCall } from ".."
import { loginRoutes } from "../ApiRoutes"

export const login = async (values: any) => {
    const data = await apiCall("post", `${loginRoutes}`, values);
    return data
}