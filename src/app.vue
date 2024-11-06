<template>
  <div id="app">
    <MonHeader />
    <div class="portfolio-container">
    <router-view />
    </div>
    <MonFooter />
  </div>
</template>

<script>
import MonFooter from './components/MonFooter.vue';
import MonHeader from './components/MonHeader.vue';

export default {
  components: {
    MonHeader,
    MonFooter
  }
};
</script>

<style scoped>

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .portfolio-container{
    flex: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    width: 100%;
  }

  header{
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: #fff;
  }

  footer{
    background-color: #333;
    text-align: center;
    padding: 10px 0;
  }

  @media (min-width: 1200px){
    .portfolio-container{
      padding: 0 15px;
    }
  }
    </style>
