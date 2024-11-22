import {
  HandleFetchResponseOptions,
  HttpStatusCode,
  StandardizeResponseData,
} from "./type";

// const HttpSuccessCodeRegex = /^(200|201|202)$/g;

const handleFetchResponse = <T extends StandardizeResponseData>({
  status,
  data,
  standardizeResponse,
  forbiddenErrorMessage,
  fetchErrorMessage,
  serverErrorMessage,
}: HandleFetchResponseOptions<T>) => {
  if (status === HttpStatusCode.Forbidden) {
    return Promise.reject(
      new Error(
        forbiddenErrorMessage ?? "You don't have permission on this action!"
      )
    );
  }

  // if (!HttpSuccessCodeRegex.test(String(status))) {
  if (status >= HttpStatusCode.BadRequest) {
    return Promise.reject(
      new Error(data.errorCode || fetchErrorMessage || "Something went wrong!")
    );
  }

  if (!data) {
    return Promise.reject(
      new Error(
        serverErrorMessage ?? "Please check your network and try again."
      )
    );
  }

  const validResponse = standardizeResponse(data);

  if (validResponse.errorMessage) {
    return Promise.reject(new Error(validResponse.errorMessage));
  }

  return Promise.resolve(validResponse?.data || data);
};

export default handleFetchResponse;
