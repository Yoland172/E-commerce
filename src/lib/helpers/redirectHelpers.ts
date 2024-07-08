export const setRedirectAfterLoginURL = (url: string) => {
  localStorage.setItem("redirectAfterLoginURL", url);
};

export const getRedirectAfterLoginURL = () => {
  const path = localStorage.getItem("redirectAfterLoginURL");
  return path || "/mainPage";
};
