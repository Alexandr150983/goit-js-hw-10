import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_fYN5fGg3mdb5Fw0OIRvriZCLS5fQpTjey6nNQ8dPQm3WCemqw2xtcmA1B7rfPXNK';

export default function fetchBreeds() {
  const baseUrl = 'https://api.thecatapi.com/';
  const url = `${baseUrl}v1/breeds`;

  return axios.get(url).then(response => {
      if (response.status !== 200) {
        throw new Error();
      }
      return response.data;
  });
}
