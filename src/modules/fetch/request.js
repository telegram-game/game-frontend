import axios from "axios";
import handleFetchResponse from "./response";

const buildFetchRequest = ({
  request,
  refreshToken,
  handleError,
  responseOptions,
}) => {
  return request()
    .catch((error) => {
      if (
        error.response &&
        error.response.status === 401 && // HttpStatusCode.Unauthorized = 401
        refreshToken
      ) {
        return refreshToken().then(() => request());
      }
      if (axios.isCancel(error)) {
        return Promise.reject(error);
      }
      return error;
    })
    .then((res) => handleFetchResponse({ ...res, ...responseOptions }))
    .catch((error) => {
      handleError(error);
      throw error;
    });
};

export default buildFetchRequest;
