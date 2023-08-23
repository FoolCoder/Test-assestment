import axios from 'axios';

async function apiRequest(path, method, data, authorization, contentType) {
  const headers = {
    accept: 'application/json',
  };

  if (contentType) {
    headers['Content-Type'] = contentType || 'application/json';
  }

  if (authorization) {
    headers.authorization = authorization;
  }
  try {
    const res = await axios({
      method: method,
      url: baseUrl + path,
      data: data,

      headers: headers,
    });
    return res?.data;
  } catch (error) {
    console.log('response', error);

    return {...error?.response?.data};
  }
}

function useApiRequest() {
  return async (
    path,
    method = 'GET',
    data,
    contentType = 'application/json',
  ) => {
    let authorization = undefined;
    // authorization = await validateLogin();
    return await apiRequest(path, method, data, authorization, contentType);
  };
}

export {useApiRequest, apiRequest};
