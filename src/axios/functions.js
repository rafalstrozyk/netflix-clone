import axiosCli from 'axios/axios';
import axios from 'axios';

require('dotenv').config();

const key = `api_key=${process.env.REACT_APP_API_KEY}`;

function urlPages(url, pages) {
  const array = [];
  for (let i = 1; i <= pages; i++) {
    array.push(axiosCli.get(`${url}&page=${i}`));
  }
  return array;
}

export async function moviesLoader() {
  try {
    const response = await axios.all(urlPages(`/movie/popular?${key}`, 5)).then((responseArr) => {
      const moviesData = [];
      responseArr.forEach((arr, index) => {
        const newArray = [];
        arr.data.results.forEach((item) => {
          const newItem = {
            title: item.title,
            overview: item.overview,
            id: item.id,
            img: `https://image.tmdb.org/t/p/original${item.poster_path}`,
            my_list: false,
          };
          newArray.push(newItem);
        });
        moviesData.push({
          title: `Popular movies ${index + 1}`,
          movies: newArray,
        });
      });
      return moviesData;
    });

    return response;
  } catch (err) {
    return err;
  }
}
export async function tvLoader() {
  try {
    const response = await axios.all(urlPages(`/tv/popular?${key}`, 5)).then((responseArr) => {
      const tvsData = [];
      responseArr.forEach((arr, index) => {
        const newArray = [];
        arr.data.results.forEach((item) => {
          const newItem = {
            title: item.name,
            overview: item.overview,
            id: item.id,
            img: `https://image.tmdb.org/t/p/original${item.poster_path}`,
            my_list: false,
          };
          newArray.push(newItem);
        });
        tvsData.push({
          title: `Popular tv series ${index + 1}`,
          tvs: newArray,
        });
      });
      return tvsData;
    });

    return response;
  } catch (err) {
    return err;
  }
}
