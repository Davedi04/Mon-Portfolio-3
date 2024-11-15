<template>
  <div class="not-found">
    <!-- erreur 404 -->
    <img class="image404" src="/src/assets/img/img404.jpg" alt="Image 404">
    <h1>404</h1>
    <p>La page n'existe pas. Vous allez retourner à la <a href="index.html">page d'accueil</a></p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .not-found{
    text-align: center;
    margin-top: 50px;
  }

  img{
    max-width: 300px;
    margin-bottom: 20px;
  }

  h1{
    font-size: 4rem;
    color: #ff3333;
  }

  p{
    font-size: 1.5rem;
    color: #555;
  }
</style>
