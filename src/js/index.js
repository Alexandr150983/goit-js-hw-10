import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';
import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

axios.defaults.headers.common['x-api-key'] =
  'live_fYN5fGg3mdb5Fw0OIRvriZCLS5fQpTjey6nNQ8dPQm3WCemqw2xtcmA1B7rfPXNK';

const breedSelect = document.querySelector('.breed-select');
const catInfoDiv = document.querySelector('.cat-info');
  
breedSelect.addEventListener('change', () => {
    const selectedBreedId = breedSelect.value;

    fetchCatByBreed(selectedBreedId)
        .then(catData => {
            catInfoDiv.innerHTML = `
        <img src="${catData[0].url}" alt="Cat Image">
        <h3>${catData[0].breeds[0].name}</h3>
        <p><strong>Description:</strong> ${catData[0].breeds[0].description}</p>
        <p><strong>Temperament:</strong> ${catData[0].breeds[0].temperament}</p>
            `;
            catInfoDiv.style.display = 'block';
        })
        .catch(error => {
            console.log(error.message);
            catInfoDiv.style.display = 'none';
    })
})
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


  
