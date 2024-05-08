export const modifyPayload = (data: any) => {
    const value = { ...data }
    const obj = JSON.stringify(value)
    const formData = new FormData;
    formData.append("data", obj)
    return formData
}