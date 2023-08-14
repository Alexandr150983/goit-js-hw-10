import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_fYN5fGg3mdb5Fw0OIRvriZCLS5fQpTjey6nNQ8dPQm3WCemqw2xtcmA1B7rfPXNK';

export function fetchBreeds() {
  const url = `https://api.thecatapi.com/v1/breeds`;

  return axios.get(url).then(response => {
      if (response.status !== 200) {
        throw new Error();
      }
      return response.data;
  });
};

export function fetchCatByBreed(breedId) {
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

    return axios
        .get(url)
        .then(response => response.data)
        .catch(error => {
            console.log(error.message);
            throw error;
        });
};
