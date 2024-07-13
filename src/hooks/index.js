import axios from 'axios';

async function apiRequest(path, data = '', method, contentType) {
  const headers = {
    accept: 'application/json',
  };
  const key =
    data === 'search'
      ? ' &api_key=802844a8def89a9f887324cb84787620'
      : '?api_key=802844a8def89a9f887324cb84787620';
  if (contentType) {
    headers['Content-Type'] = contentType || 'application/json';
  }

  try {
    const res = await axios({
      method: method,
      url: 'https://api.themoviedb.org/3/' + path + key,
      data: data,

      headers: headers,
    });
    return res?.data;
  } catch (error) {
    return {...error?.response?.data};
  }
}

export {apiRequest};
