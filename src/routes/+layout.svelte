<script>
  import "../styles/global.css";
</script>

<div class="flex-container">
  <h1>MOVIES</h1>
</div>

<slot />

<style>
  .flex-container {
    display: flex;
    padding: 20px;
    color: var(--accent);
    justify-content: center;
  }
  .flex-container h1 {
    font-size: 3rem;
  }
  /* .flex-container p {
    margin-left: auto;
  } */
</style>
