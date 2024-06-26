import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllHairstyleOccasion = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/hairstyle_occasion.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleHairstyleOccasion = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/hairstyle_occasion/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

export { getAllHairstyleOccasion, getSingleHairstyleOccasion };
