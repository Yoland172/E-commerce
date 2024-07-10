export const getTokenFromStorage = () => {
  return localStorage.getItem("token") || "";
};

export const setTokenToStorage = (token: string) => {
  return localStorage.setItem("token", token);
};
