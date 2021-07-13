let baseURL = process.env.REACT_APP_API_URL;
const headers = () => {
  return {
    'Accept': 'application/json',
    "Content-Type": "application/json"
  };
};

const request = (method, endpoint, data) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/api/v1${endpoint}`, {
      method,
      // headers: headers(),
      body: JSON.stringify(data),
      
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const get = (endpoint) => {
  return request("get", endpoint);
};

const post = (endpoint, data = null) => {
  return request("post", endpoint, data);
};

export default {
  get,
  post,
  headers
};
