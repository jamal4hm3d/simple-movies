import { getData } from "$lib/utils/db";
import { json } from "@sveltejs/kit";

export async function GET() {
  const moviesData = await getData(import.meta.env.VITE_GIST_ID, "movies.json");
  const movies = [];
  for (const movie in moviesData) {
    const id = moviesData[movie].id;
    const link = moviesData[movie].link;
    const tmdbData = await getTmdbData(id);
    tmdbData.link = link;
    tmdbData.title = movie;
    movies.push(tmdbData);
  }
  return json(movies);
}

async function getTmdbData(id) {
  const data = {};
  const url = getTmdbUrl(id);
  const req = await fetch(url);
  const res = await req.json();
  const movieName = `${res.movie_results[0].title} (${
    res.movie_results[0].release_date.split("-")[0]
  })`;
  const movieImage = `https://image.tmdb.org/t/p/original${res.movie_results[0].poster_path}`;
  data.name = movieName;
  data.image = movieImage;
  return data;
}

function getTmdbUrl(id) {
  const BASE_URL = "https://api.themoviedb.org/3/find/";
  const newUrl = new URL(id, BASE_URL);
  newUrl.searchParams.append("api_key", import.meta.env.VITE_TMDB_TOKEN);
  newUrl.searchParams.append("external_source", "imdb_id");
  return newUrl.toString();
}
