<template>
  <header class="header">
    <div class="container">
      <img src="/src/assets/img/D.png" class="logo" alt="Logo" @click="scrollToTop">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-icons" v-if="!menuOpen">menu</span>
        <span class="material-icons" v-else>close</span>
      </button>
      <nav class="{ menu: true, open: menuOpen }">
        <ul>
          <li><a href="#A propos">A propos</a></li>
          <li><a href="#Compétences">Compétences</a></li>
          <li><a href="#Mes Réalisations">Mes Réalisations</a></li>
          <li><a href="#Contactez-moi">Contactez-moi</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <button v-if="showScrollTopButton" class="scroll-top" @click="scrollToTop">
    <span class="material-icons">arrow_upward</span>
  </button>
</template>
<script>
  export default {
    name: 'MonHeader',
    data() {
      return {
        menuOpen:false,
        showScrollTopButton: false
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
      scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      handleScroll() {
      this.showScrollTopButton = window.scrollY > 10; // Affiche le bouton après 200px de défilement
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  };
</script>

<style scoped>

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  header {
    display: flex;
    background-color: #333;
    position: relative;
    color: white;
    text-align: center;
    margin: 0;
    padding: 0;
    height: auto;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    width: 100%;
  }

  .logo{
    border-radius: 10%;
  }

  .menu-toggle {
    display: none;
  }

  nav.menu{
    display: block;
  }

  nav ul{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
  }

  nav ul li a {
    color: white;
    text-decoration: none;
  }

  .scroll-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #555;
    color: white;
    border: none;
    border-radius: 20%;
    width: 50px;
    height: 40px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s ease;
  }

  .scroll-top:hover {
    background-color: #555;
  }

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  .menu-toggle {
    display: block;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    margin-left: auto;
  }

  nav.menu {
    display: none;
  }

  nav.menu.open {
    display: block;
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  nav ul li {
    display: inline;
    margin: 0 10px;
  }

  nav ul li a {
    color: white;
    text-decoration: none;
  }
}
</style>
