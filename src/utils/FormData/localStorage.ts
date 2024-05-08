export const setTokenInLocal = (key: string, data: string) => {
    if (!key || typeof window === 'undefined') {
        return ''
    }
    return localStorage.setItem(key, data)
}

export const getTokenFromLocal = (key: string) => {
    // if (!key || typeof window === 'undefined') {
    //     return ''
    // }
    return localStorage.getItem(key)
}