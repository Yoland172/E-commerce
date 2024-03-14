export const setredirectAfterLoginURL = (url: string) => {
  localStorage.setItem("redirectAfterLoginURL", url);
};

export const getredirectAfterLoginURL = () => {
  const path = localStorage.getItem("redirectAfterLoginURL");
  if (path) {
    return path;
  }
  return "/startPage";
};
