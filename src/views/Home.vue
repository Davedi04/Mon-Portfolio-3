<template>
  <main>
    <!--Intro-->
    <div class="background-container">
      <div class="text-overlay">
        <h1>Desmurger David</h1>
        <h3>Je suis developpeur web</h3>
      </div>
    </div>

    <!--Présentation-->
    <div class="présentation">
      <div class="texte1">
        <h2 id="A propos">A propos de moi</h2>
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
          <img src="/src/assets/img/img-html.png">
          <h3>HTML</h3>
        </div>
        <div class="box skill">
          <img src="/src/assets/img/img-css.jpg">
          <h3>CSS</h3>
        </div>
        <div class="box skill">
          <img src="/src/assets/img/img-js.png">
          <h3>JS</h3>
        </div>
      </div>
    </div>

    <!--Réalisations-->
    <div class="column2">
      <h2 id="Mes Réalisations">Mes Réalisations</h2>
      <div class="flex2">
        <div class="box skill2">
          <a href="">
            <img src="/src/assets/img/cv.jpg" alt="">
            <h3>Mon cv</h3>
          </a>
        </div>
        <div class="box skill2">
          <a href="">
            <img src="/src/assets/img/cdc.jpg" alt="">
            <h3>Cahier des charges</h3>
          </a>
        </div>
        <div class="box skill2">
          <a href="">
            <img src="/src/assets/img/Duec.png" alt="">
            <h3>Dynamiser un espace commentaire</h3>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default{
    name: 'Home',
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&display=swap');

/* Intro */
  .background-container{
    position: relative;
    width: 100%;
    height: 500px;
    background-image: url('/src/assets/img/slider2.jpg');
    background-size: cover;
    background-position: center;
    filter:brightness( 60%);
  }
  .text-overlay{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    padding: 20px;
  }

  h1{
    font-size: 3rem;
  }

  h2{
    font-size: 1.8rem;
    font-weight: bold;
  }

  h3{
    font-size: 1.2rem;
  }

/* A propos */
  .présentation{
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin: 20px 0;
  }

  .texte1{
    padding: 50px;
  }

  .texte2{
    display: flex;
    text-align: left;
    padding-left: 120px;
    padding-right: 60px;
    padding-top: 50px;
  }

/* Compétences */
  .column{
    display: flex;
    flex-direction: column;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }

  .flex{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }

  .box{
    border: 2px solid black;
    border-radius: 0%;
    padding: 10px;
    text-align: center;
  }

  .skill{
    background: #fff;
    border-radius: 15px;
    padding: 30px;
    box-sizing: border-box;
    color: #000;
  }

  .skill img{
    width: 100px;
    height: 100px;
    aspect-ratio: 1/1;
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
    padding: 10px;
  }

  .flex2{
    display: flex;
    align-items: center;
    padding: 50px;
  }

  .skill2{
    display: flex;
    justify-content: center;
    background: #333;
    border-radius: 10px;
    width: 250px;
    height: 220px;
    padding: 5px;
    box-sizing: border-box;
    color: #000;
  }

  .skill2 img{
    width: 100px;
    height: 100px;
    aspect-ratio: 1/1;
    object-fit: contain;
  }


</style>
