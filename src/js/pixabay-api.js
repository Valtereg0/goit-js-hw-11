import axios from 'axios';

const apiKey = '51401862-5106c302b458f745abd86383c';
const url = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(url, { params }).then(response => response.data);
}
