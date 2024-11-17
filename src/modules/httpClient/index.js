import { redirect } from "react-router-dom";

import { API_ENDPOINTS } from "../../constants/api-endpoint";
import { buildFetchInstance, buildFetchRequest } from "../fetch";
import {
  persistAccessToken,
  persistRefreshToken,
  readAccessToken,
  readRefreshToken,
} from "../redux/storages/auth.storage";

// Handle Refresh Token
const handleRefreshToken = async (fetchInstance) => {
  const values = await readRefreshToken();

  if (!values) {
    redirect("/unauthorized");
    return Promise.reject();
  }

  return fetchInstance
    .post(API_ENDPOINTS.AUTH.REFRESH_TOKEN, JSON.parse(values))
    .then(({ data }) => {
      const { refreshToken, accessToken } = data.data || {};

      if (refreshToken) {
        persistAccessToken(accessToken);
        persistRefreshToken(JSON.stringify({ refreshToken }));
      }
    });
};

// Fetch Request Options
const fetchRequest = async (
  buildRequest, // This will be a function that takes in an Axios instance and returns a promise
  options = {}
) => {
  const fetchInstance = await buildFetchInstance({
    baseURL: "http://localhost:4000/api",
    getAccessToken: readAccessToken,
    customizeAuthorizeHeader: (accessToken) => `Bearer ${accessToken}`,
  });

  const t = (str) => str; // await getServerTranslation("common");

  return buildFetchRequest({
    request: () => buildRequest(fetchInstance),
    refreshToken: () => handleRefreshToken(fetchInstance),
    handleError: (e) => {
      if (options.skipHandleError) {
        console.error("fetch error", e);
        throw e;
      }

      console.error({
        message: e?.message ?? t("validation.500"),
      });
    },
    responseOptions: {
      standardizeResponse: (data) => {
        return {
          data: data.data,
          errorMessage: data?.data.errorMessage,
        };
      },
      forbiddenErrorMessage: t("validation.access-deny-action"),
      fetchErrorMessage: t("validation.500"),
      serverErrorMessage: t("validation.500"),
    },
  });
};

// HTTP Methods
const Get = async (url, options) =>
  fetchRequest((instance) => instance.get(url), options);

const Post = async (url, payload, options) =>
  fetchRequest((instance) => instance.post(url, payload), options);

const Put = async (url, payload, options) =>
  fetchRequest((instance) => instance.put(url, payload), options);

const Delete = (url, options) =>
  fetchRequest((instance) => instance.delete(url), options);

export { Delete, Get, Post, Put };

