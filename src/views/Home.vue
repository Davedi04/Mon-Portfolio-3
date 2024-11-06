<template>
  <main>
    <!--Intro-->
    <div class="background-container">
      <div class="text-overlay">
        <h1>Desmurger David</h1>
        <p>Je suis developpeur web</p>
      </div>
    </div>

    <!--Présentation-->
    <div class="présentation">
      <div class="texte1">
        <p id="A propos">A propos de moi</p>
      </div>
      <div class="texte2">
        <p>J'ai 43 ans, je suis en concubinage depuis plus de 23 ans,<br/> nous avons un enfant de 15 ans.
        Je m'interesse à tous se qui touche de près ou de loin à l'informatique depuis tout petit.<br/>
        Je suis passionné des jeux "Paradox", "EA", ect...<br/>
        Je viens de commencer une formation développeur Web il y a 3 mois.</p>
      </div>
    </div>

    <!--Compétences-->
    <div class="column">
      <h2 id="Compétences">Compétences</h2>
      <div class="flex">
        <div class="box skill">
          <img src="/src/assets/img/img-html.png" alt="HTML">
          <h3>HTML</h3>
        </div>
        <div class="box skill">
          <img src="/src/assets/img/img-css.jpg" alt="CSS">
          <h3>CSS</h3>
        </div>
        <div class="box skill">
          <img src="/src/assets/img/img-js.png" alt="JavaScript">
          <h3>JS</h3>
        </div>
      </div>
    </div>

    <!-- Réalisations -->
    <div class="column2">
      <h2 id="Mes Réalisations">Mes Réalisations</h2>
      <div class="flex2">
        <div class="box skill2" v-for="creation in creations" :key="creation.id" :class="creation-item">
          <img :src="creation.image" @click="openModal(creation)" alt="Image de la réalisations" />
          <h3>{{ creation.title }}</h3>
        </div>
      </div>
      <Modal :show="showModal" :data="selectedCreation" @close="showModal = false" />
    </div>
  </main>
</template>

<script>
  import Modal from "./Modal.vue";

  export default {
  components: { Modal },
  data() {
    return {
      showModal: false,
      selectedCreation: {},
      creations: [
        {
          id: 1,
          title: "Mon CV",
          image: "/src/assets/img/cv.jpg",
          description: "Mon parcours professionnel et mes compétences.",
          type: "Mon_cv",
          cvUrl: "/cv/index-cv.html"
        },
        {
          id: 2,
          title: "Cahier des charges",
          image: "/src/assets/img/cdc.jpg",
          description: "Description de mon cahier des charges.",
          type: "Cahier_des_charges",
          cvUrl: "/cahier/Cahier%20des%20charges.pdf"
        },
        {
          id: 3,
          title: "Dynamiser un espace commentaire",
          image: "/src/assets/img/Duec.png",
          description: "Projet de dynamisation de commentaires.",
          type: "Dynamiser_un_espace_commentaire",
          cvUrl: "/dynamiser/index.html"
        }
      ]
    };
  },
  methods: {
    openModal(creation) {
      this.selectedCreation = creation;
      this.showModal = true;
    }
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&display=swap');

/* Intro */
  .background-container{
    position: relative;
    width: 100%;
    height: 400px;
    background-image: url('/src/assets/img/slider2.jpg');
    background-size: cover;
    background-position: center;
    filter:brightness( 0.5);
    margin: 0;
  }

  .text-overlay{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    padding: 20px;
  }

  .text-overlay h1{
    font-size: 3rem;
    text-shadow: 2px 2px 4px #000;
  }

/* A propos */
  .présentation{
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin: 10px auto;
    margin-bottom: 50px;
  }

  .texte1{
    padding: 50px;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .texte2{
    padding: 60px 120px 0 60px;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

/* Compétences */
  .column{
    display: flex;
    flex-direction: column;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px;
  }

  .flex{
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }

  .box{
    border: 1px solid #666;
    border-radius: 10px;
    padding: 20px;
    text-align: ceter;
  }

  .skill{
    background: #fff;
    border-radius: 25px;
    color: #000;
  }

  .skill img{
    width: 100px;
    height: 60px;
    object-fit: contain;
  }

/* Mes réalisations*/
  .column2{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #fff;
    color: #000;
    padding: 50px;
  }

  .flex2{
    display: flex;
    justify-content: space-around;
    padding: 20px;
  }

  .skill2{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #333;
    color: #fff;
    border-radius: 25px;
    width: 240px;
    height: 220px;
    padding: 30px;
    margin: 20px;
  }

  .skill2 img{
    width: 100px;
    height: 120px;
    object-fit: contain;
  }

  .creation-item{
    cursor: pointer;
    margin: 20px;
    text-align: center;
  }

  .creation-item img{
    width: 150px;
    height: auto;
    border-radius: 8px;
  }

  .skill2 h3{
    margin-top: 90px;
  }

  @media (max-width: 768px) {
    .text2 {
      padding: 20px;
    }

    .flex, .flex2 {
      flex-direction: column;
      align-items: center;
    }

    .skill2{
      width: 90%;
      margin-bottom: 20px;
    }
  }

</style>
