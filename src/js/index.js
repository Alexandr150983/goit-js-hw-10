import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';
import axios from 'axios';
import fetchBreeds from './cat-api';

axios.defaults.headers.common['x-api-key'] =
  'live_fYN5fGg3mdb5Fw0OIRvriZCLS5fQpTjey6nNQ8dPQm3WCemqw2xtcmA1B7rfPXNK';

const breedSelect = document.querySelector('.breed-select');
  
fetchBreeds()
    .then(breeds => {
        breeds.forEach(breed => {
            const option = document.createElement("option");
            option.value = breed.id;
            option.textContent = breed.name;
            breedSelect.appendChild(option);
        });
        console.log(breeds);
    })
    .catch(error => {
        console.log(error.message);
    });

new SlimSelect({
  select: '#selectElement',
});


  
