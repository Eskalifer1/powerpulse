export const errorCatch = (error: any): number => {
  const message = error?.response?.status;

  return message
    ? typeof error.response.status === "object"
      ? message[0]
      : message
    : error.status;
};
