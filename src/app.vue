<template>
  <div class="app-container">
    <header>
      <MonHeader />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <MonFooter />
    </footer>
  </div>
</template>

<script>
import MonFooter from './components/MonFooter.vue';
import Home from './views/Home.vue';
import MonHeader from './components/MonHeader.vue';

export default {
  components: {
    MonHeader,
    Home,
    MonFooter
  }
};
</script>

<style scoped>
  .app-container{
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    padding: 0;
  }

  header{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 100vh;
    padding: 0;
  }

  main{
    flex-grow: 1;
    justify-content: space-around;
    align-items: center;
    height: auto;
    width: 100vh;
    padding: 0;

  }

  footer{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 280px;
    width: 100vh;
    padding: 0;
  }

</style>
