<template>
  <footer class="footer">
    <h2 id="Contactez-moi">Contactez-moi</h2>
    <div class="flexfooter">
      <div class="box2 inbox2">
        <span class="material-icons">mail</span>
        <span>E-mail</span>
        <span><a href="mailto:desmurgerdavid@gmail.com">desmurgerdavid@gmail.com</a></span>
      </div>
      <div class="box2 inbox2">
        <span class="material-icons">phone</span>
        <span>Tel</span>
        <span><a href="tel:06.06.06.06.06">06.48.91.46.91</a></span>
      </div>
      <div class="box2 inbox2">
        <span class="material-icons icon">chat</span>
        <span>Facebook</span>
        <span><a href="https://www.facebook.com/?locale=fr_FR" target="_blank">Davedi</a></span>
      </div>
      <div class="box2 inbox2">
        <span class="material-icons icon">book</span>
        <span>GitHub</span>
        <span><a href="https://github.com" target="_blank">GitHub</a></span>
      </div>
    </div>

    <div class="update-date">
      <p>Dernière mise à jour : <span id="date"></span></p>
    </div>

  </footer>
</template>

<script>
  import 'material-design-icons-iconfont/dist/material-design-icons.css'

  export default {
    name: 'MonFooter',
  };

  window.onload = function() {
    const dateElement = document.getElementById("date");
    const today = new Date();
    const formattedDate = today.toLocaleDateString("fr-FR", {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    dateElement.
    textContent = formattedDate;
    };

</script>

<style>
  footer {
    display: flex;
    flex-direction: column;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }

  .flexfooter{
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: #333;
  }

  .box2{
    width: 200px;
    height: 130px;
    border: 2px solid black;
    border-radius: 5%;
    padding: 50px;
    text-align: center;
  }

  .inbox2{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    margin: 10px;
    background-color: #fff;
    color: #000;
  }

  .material-icons {
  font-size: 36px;
  color: #000;
  margin-bottom: 5px;
  }

  .update-date{
    margin-top: 20px;
    font-size: 14px;
  }
</style>
