<script>
  import Poster from "$lib/components/Poster.svelte";
  export let data;
  let movies = [];
  for (const i in data) {
    movies.push(data[i]);
  }
  let searchq = "";
  $: filmovies = movies.filter((x) =>
    x.name.toLowerCase().includes(searchq.toLowerCase())
  );
</script>

<div class="flex-box">
  <input
    type="text"
    name="search"
    id="search"
    placeholder="search here"
    bind:value={searchq}
  />
</div>

<div class="grid-container">
  {#each filmovies as movie}
    <Poster details={movie} />
  {/each}
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    margin: 20px;
    gap: 10px;
  }
  .flex-box {
    display: flex;
    justify-content: center;
    padding: 10px;
  }
  input {
    background-color: var(--background);
    color: var(--font);
    border: 2px solid var(--accent);
    padding: 10px;
    width: 75vw;
  }
  input:focus {
    outline: none;
  }
  @media only screen and (max-width: 600px) {
    .grid-container {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
