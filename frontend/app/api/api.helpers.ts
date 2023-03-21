export const getContentType = () => ({
    'Content-Type': 'application/json',
})

export const errorCath = (error: any): string => error.message && error.response.data ? typeof error.response.data.message === 'object' ? error.response.data.message[0] : error.respone.data.meassage : error.message
