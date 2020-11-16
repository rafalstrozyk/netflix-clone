import axios from 'axios/axios';

export async function moviesLoader() {
  try {
    const response = await axios
      .get('/movie/popular')
      .then((res) => res.data)
      .then((data) => {
        const moviesData = [];
        data.results.forEach((item) => {
          const newItem = {
            title: item.title,
            overview: item.overview,
            id: item.id,
            img: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          };
          moviesData.push(newItem);
        });

        return moviesData;
      });

    return response;
  } catch (err) {
    return err;
  }
}
