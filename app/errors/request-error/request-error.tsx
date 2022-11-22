class RequestError extends Error {
  name: string;

  status: number;

  constructor(status: number, ...params: any) {
    super(...params);

    this.name = 'RequestError';
    this.status = status;
  }
}

export default RequestError
