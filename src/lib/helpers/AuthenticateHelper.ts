export const getTokenFromStorage = () => {
    return localStorage.getItem('token') || '';
};

export const setTokenToStorage = (token: string) => {
    return localStorage.setItem('token', token);
};

export const deleteTokenFromStorage = () => {
    localStorage.removeItem('token');
};
