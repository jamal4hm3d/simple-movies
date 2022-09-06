<script>
  export let details;
  const params = new URLSearchParams({ title: details.title }).toString();
</script>

<div class="flex-container">
  <a href={`/api/rd?${params}`} download={`${details.name}.m3u8`}>
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
