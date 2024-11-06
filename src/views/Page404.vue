<template>
  <div class="container">
    <main class="m404">
      <h1>Erreur 404</h1>
      <img class="image404" src="/src/assets/img/img404.jpg" alt="Image 404">
      <p>La page n'existe pas. Vous allez retourner à la <a href="index.html">page d'accueil</a></p>
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
  .m404{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .image404{
    width: 300px;
    height: 300px;
  }
</style>
