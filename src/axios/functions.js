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
            type: 'movie',
            new: false,
          };
          newArray.push(newItem);
        });
        moviesData.push({
          title: `Popular movies ${index + 1}`,
          content: newArray,
          type: 'movies',
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
            type: 'tv',
            new: false,
          };
          newArray.push(newItem);
        });
        tvsData.push({
          title: `Popular tv series ${index + 1}`,
          content: newArray,
          type: 'tvs',
        });
      });
      return tvsData;
    });

    return response;
  } catch (err) {
    return err;
  }
}

export async function newMoviesLoader() {
  try {
    const response = await axiosCli.get(`/movie/top_rated?${key}`).then((res) => {
      const moviesData = [];
      const newArray = [];
      res.data.results.forEach((item) => {
        const newItem = {
          title: item.title,
          overview: item.overview,
          id: item.id,
          img: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          my_list: false,
          type: 'movie',
          new: true,
        };
        newArray.push(newItem);
      });
      moviesData.push({
        title: `New movies`,
        content: newArray,
        type: 'movies',
      });
      return moviesData;
    });

    return response;
  } catch (err) {
    return err;
  }
}

export async function newTvsLoader() {
  try {
    const response = await axiosCli.get(`/tv/top_rated?${key}`).then((res) => {
      const moviesData = [];
      const newArray = [];
      res.data.results.forEach((item) => {
        const newItem = {
          title: item.name,
          overview: item.overview,
          id: item.id,
          img: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          my_list: false,
          type: 'tv',
          new: true,
        };
        newArray.push(newItem);
      });
      moviesData.push({
        title: `New tvs`,
        content: newArray,
        type: 'tvs',
      });
      return moviesData;
    });

    return response;
  } catch (err) {
    return err;
  }
}
