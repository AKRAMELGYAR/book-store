
const axios = require('axios');

const API_KEY = 'AIzaSyCP8aFcdfSarTyzwObX0jhQm-xMgnCBT0M';
const SEARCH_TERM = 'Harry Potter';
LANG_RESTRICT = 'en'

axios.get(`https://www.googleapis.com/books/v1/volumes?q=${SEARCH_TERM}&langRestrict=${LANG_RESTRICT}&key=${API_KEY}`)
  .then(response => {
    const books = response.data.items;
    books.forEach(book => {
      console.log(book.volumeInfo);
    });
  })
  .catch(err=> {
    console.error('faild', err);
  });

