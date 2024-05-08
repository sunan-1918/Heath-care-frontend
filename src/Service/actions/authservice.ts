import { getTokenFromLocal, setTokenInLocal } from "@/utils/FormData/localStorage"
import { jwtDecode } from "jwt-decode"

const key = 'accessToken'

export const saveAccessToken = async (data: { accessToken: string }) => {
    return setTokenInLocal(key, data.accessToken)
}

export const getUserInfo = () => {
    const token = getTokenFromLocal(key)
    let decoded;
    console.log(token);
    if (token) {
        decoded = jwtDecode(token as string);
    }
    console.log(decoded);

    return decoded
}