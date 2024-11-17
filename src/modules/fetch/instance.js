import axios from "axios";

const buildFetchInstance = async ({
  baseURL,
  getAccessToken,
  customizeAuthorizeHeader,
  ...params
}) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  if (getAccessToken) {
    let token = await getAccessToken();

    if (token) {
      headers.Authorization = customizeAuthorizeHeader
        ? customizeAuthorizeHeader(token)
        : `Bearer ${token}`;
    }
  }

  return axios.create({
    baseURL,
    headers,
    ...params,
  });
};

export default buildFetchInstance;
