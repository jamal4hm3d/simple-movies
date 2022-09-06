async function getData(id, name) {
  const req = await fetch(`https://api.github.com/gists/${id}`);
  const gist = await req.json();
  return JSON.parse(gist.files[name].content);
}

async function setData(data, id, name) {
  const req = await fetch(`https://api.github.com/gists/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GIST_TOKEN}`,
    },
    body: JSON.stringify({
      files: {
        [name]: {
          content: JSON.stringify(data),
        },
      },
    }),
  });
}

export { getData, setData };
