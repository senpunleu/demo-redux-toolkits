const baseUrl = `https://jsonplaceholder.typicode.com/`;

export enum ApiMethod {
  POST = 'post',
  GET = 'get',
}

type ApiProps = {
  method: ApiMethod;
  path: string;
};

const ApiManager = {
  request: ({method, path}: ApiProps) =>
    new Promise(async (resolve, reject) => {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      fetch(`${baseUrl}${path}`, {
        method: method,
        headers: myHeaders,
        redirect: 'follow',
      })
        .then(value => {
          value
            .json()
            .then(value => {
              resolve(value);
            })
            .catch(error => {
              reject(error);
            });
        })
        .catch(error => {
          reject(error);
        });
    }),
};

export {ApiManager};
