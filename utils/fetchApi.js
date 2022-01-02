import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '38ede2105emsh4dc625c8f02dc92p1da4a4jsn8ac54c06c567',
    },
  });

  return data;
};
