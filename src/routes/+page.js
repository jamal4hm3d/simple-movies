export async function load({ fetch }) {
  const req = await fetch("/api/data");
  const movies = await req.json();
  return movies;
}
