export const setredirectAfterLoginURL = (url: string) => {
  localStorage.setItem("redirectAfterLoginURL", url);
};

export const getredirectAfterLoginURL = () => {
  const path = localStorage.getItem("redirectAfterLoginURL");
  return path || "/startPage";
};
