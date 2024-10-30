<template>
  <header>
    <div class="container">
      <img src="/src/assets/img/D.png" class="logo" alt="Logo">
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
</template>
<script>
  export default {
    name: 'MonHeader',
    data() {
      return {
        menuOpen:false
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      }
    }
  };
</script>

<style scoped>
  header {
    display: flex;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo{
    border-radius: 10%;
  }

  .menu-toggle {
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

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: flex-start;
    }

    nav ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

</style>
