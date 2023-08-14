// import SlimSelect from 'slim-select';
// import Notiflix from 'notiflix';
// import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector('.breed-select');
const catInfoDiv = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorElement = document.querySelector('.error');

function showLoader() {
  loader.style.display = 'block';
};

function hideLoader() {
  loader.style.display = 'none';
};

function showError(message) {
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

function hideError() {
  errorElement.style.display = 'none';
}
  
function showBreedSelect() {
  breedSelect.style.display = 'block';
}

function hideBreedSelect() {
  breedSelect.style.display = 'none';
}

function showCatInfoDiv() {
  catInfoDiv.style.display = 'block';
}

function hideCatInfoDiv() {
  catInfoDiv.style.display = 'none';
}

fetchBreeds()
    .then(breeds => {
      
       hideBreedSelect();
       showLoader();

    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
    
    showBreedSelect();
    hideLoader();
  })
  .catch(error => {
    console.log(error.message);
    hideLoader();
    showError('Oops! Something went wrong!');
    hideBreedSelect();
  });

breedSelect.addEventListener('change', () => {
    const selectedBreedId = breedSelect.value;

    showLoader();
    hideError();
    hideCatInfoDiv();

    fetchCatByBreed(selectedBreedId)
        .then(catData => {
            catInfoDiv.innerHTML = `
        <img src="${catData[0].url}" alt="Cat Image">
        <h3>${catData[0].breeds[0].name}</h3>
        <p><strong>Description:</strong> ${catData[0].breeds[0].description}</p>
        <p><strong>Temperament:</strong> ${catData[0].breeds[0].temperament}</p>
            `;
            catInfoDiv.style.display = 'block';
            showCatInfoDiv();
            hideLoader();
        })
        .catch(error => {
            console.log(error.message);
            catInfoDiv.style.display = 'none';
            hideCatInfoDiv();
            showError('Oops! Something went wrong!');
            hideLoader();
        });
});




    


// new SlimSelect({
//   select: '#selectElement',
// });


  
