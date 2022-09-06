import { getData, setData } from "$lib/utils/db";

export async function GET({ url }) {
  const title = url.searchParams.get("title");
  const movieData = await getData(import.meta.env.VITE_GIST_ID, "movies.json");
  let rlink = movieData[title].rlink;
  const link = movieData[title].link;
  if (rlink) {
    const check = await checkLink(rlink);
    if (check) {
      return new Response(rlink);
    }
  }
  rlink = await getRdLink(link);
  movieData[title].rlink = rlink;
  await setData(movieData, import.meta.env.VITE_GIST_ID, "movies.json");
  return new Response(rlink);
}

async function checkLink(link) {
  let res = await fetch(link, {
    method: "HEAD",
  });
  return res.ok;
}

async function getRdLink(link) {
  let body = { link };
  const bodyParams = new URLSearchParams(body);
  let linkData = await fetch(
    "https://api.real-debrid.com/rest/1.0/unrestrict/link",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_RD_TOKEN}`,
      },
      body: bodyParams.toString(),
    }
  );
  const jsonRes = await linkData.json();
  return jsonRes.download;
}
