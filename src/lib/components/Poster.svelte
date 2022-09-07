<script>
  import is from "is-it-check";
  export let details;
  const params = new URLSearchParams({ title: details.title }).toString();
  let fileName = `${details.name}.m3u8`;
  if (is.mobile()) {
    fileName = `${details.name}.xspf`;
  }
</script>

<div class="flex-container">
  <a href={`/api/rd?${params}`} download={fileName}>
    <img src={details.image} alt={details.name} /></a
  >
  <div class="name">{details.name}</div>
</div>

<style>
  .flex-container {
    display: flex;
    flex-direction: column;
  }
  .flex-container img {
    width: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
  }
  .name {
    text-align: center;
    padding: 5px;
  }
</style>
