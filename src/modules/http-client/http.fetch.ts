import { AxiosInstance, AxiosResponse } from "axios";
import { redirect } from "react-router-dom";

import { API_ENDPOINTS } from "../../constants";
import {
  persistAccessToken,
  persistRefreshToken,
  readAccessToken,
  readRefreshToken,
} from "../redux/storages";
import { buildFetchInstance, buildFetchRequest } from "./fetch";
import { FetchInstance } from "./fetch/type";

const handleRefreshToken = async (fetchInstance: FetchInstance) => {
  const values = await readRefreshToken();

  if (!values) {
    redirect("/unauthorized");
    return Promise.reject();
  }

  return fetchInstance
    .post(API_ENDPOINTS.AUTH.REFRESH_TOKEN, JSON.parse(values))
    .then(({ data }) => {
      const { refreshToken, accessToken, username } = data.data || {};

      if (refreshToken) {
        persistAccessToken(accessToken);
        persistRefreshToken(JSON.stringify({ username, refreshToken }));
      }
    });
};

type FetchOptions = {
  skipHandleError?: boolean;
};

const fetchRequest = async <T>(
  buildRequest: (_instance: AxiosInstance) => Promise<AxiosResponse<any, any>>,
  options?: FetchOptions
): Promise<T> => {
  const fetchInstance = await buildFetchInstance({
    baseURL: API_ENDPOINTS.BASE_URL,
    getAccessToken: readAccessToken,
    customizeAuthorizeHeader: (accessToken: string) => `Bearer ${accessToken}`,
  });

  // TODO Implement to get the translation
  return buildFetchRequest<AxiosResponse<any, any>>({
    request: () => buildRequest(fetchInstance),
    refreshToken: () => handleRefreshToken(fetchInstance),
    handleError: (e) => {
      if (options?.skipHandleError) {
        console.error("fetch error", e);
        throw e;
      }

      // TODO implement error handling
      console.error({
        options,
        e,
      });
    },
    responseOptions: {
      standardizeResponse: (data) => {
        return {
          data: data.data,
          errorMessage: data?.data?.detail,
        };
      },
      // forbiddenErrorMessage: "forbiddenErrorMessage",
      // fetchErrorMessage: "fetchErrorMessage",
      // serverErrorMessage: "serverErrorMessage",
    },
  });
};

export const Get = async <T>(url: string, options?: FetchOptions): Promise<T> =>
  fetchRequest((instance) => instance.get(url), options);

export const Post = async (
  url: string,
  payload?: object,
  options?: FetchOptions
): Promise<AxiosResponse<object>> =>
  fetchRequest((instance) => instance.post(url, payload), options);

export const Put = async (
  url: string,
  payload?: object,
  options?: FetchOptions
): Promise<AxiosResponse<object>> =>
  fetchRequest((instance) => instance.put(url, payload), options);

export const Delete = (
  url: string,
  options: FetchOptions
): Promise<AxiosResponse<object>> =>
  fetchRequest((instance) => instance.delete(url), options);
