// let movie = new URL("tmsaasc", "https://api.themoviedb.org/3/find/");

// movie.searchParams.append("api_key", "abcascjsa");

// movie.searchParams.append("external_source", "imdb_id");

// console.log(movie.toString());

// let data = {
//   movie_results: [
//     {
//       adult: false,
//       backdrop_path: "/uBDbyoufp7TGaDDVTHOCxl3dz8p.jpg",
//       id: 801526,
//       title: "Darlings",
//       original_language: "hi",
//       original_title: "डार्लिंग्स",
//       overview:
//         "Badru hopes her volatile husband will reform if he stops drinking. But when his rage goes too far, she and her mom boldly, albeit clumsily, seek revenge.",
//       poster_path: "/lyA7kXCIAG17hVuvFOxlMmmv31A.jpg",
//       media_type: "movie",
//       genre_ids: [35, 80, 53],
//       popularity: 9.34,
//       release_date: "2022-08-05",
//       video: false,
//       vote_average: 7.125,
//       vote_count: 28,
//     },
//   ],
//   person_results: [],
//   tv_results: [],
//   tv_episode_results: [],
//   tv_season_results: [],
// };

// console.log(data.movie_results[0].poster_path);

// let test = { name: "jamal", sub: "ahmed" };

// if (test.sub) {
//   console.log("hi");
// } else {
//   console.log("bye");
// }

let test = new URLSearchParams({ name: "jamal ahmed" }).toString();

console.log(test);
