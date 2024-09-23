type CustomError = {
  title: string;
  message: string;
};

type CustomResponse<T> = T | CustomError;
