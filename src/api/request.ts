import axios from "axios";

export const login = async (username: string, password: string) => {
  const res = await axios.post(
    `${process.env.API_AUTH_URL}`,
    { username, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

export const currentUserToken = async (token: string) => {
  const res = await axios.get(`${process.env.API_CHECK_TOKEN}`,
   {
    headers: {
      'Authorization': `Bearer ${token}`, 
    },
  });
  return res;
};
