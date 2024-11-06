<template>
  <div v-if="show" class="modal" @click="closeModal">
    <div class="modal-content" @click.stop>
      <span @click="closeModal" class="close">&times;</span>
      <h2>{{ data.title }}</h2>
      <p>{{ data.description }}</p>

      <iframe v-if="data.cvUrl" :src="data.cvUrl" width="100%" height="500px" frameborder="0"></iframe>
      <a v-if="data.type === 'Cahier des charges'" :href="data.cvUrl" target="_blank" download class="download-button">Télécharger le PDF</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    data: Object
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
  .modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  transition: opacity 0.3s ease;
}

.modal-content {
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  max-width: 80%;
  max-height: 90%;
  width: 900px;
  height: 600px;
  overflow: auto;
  padding: 20px;
  animation: modalOpen 0.5s ease;
}

.close{
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1.5rem;
}

.download-button {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
}

.download-button:hover {
  background-color: #45a049;
}

@keyframes modalOpen {
  from {
    transform: scale(0.7);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.close {
  cursor: pointer;
  float: right;
  font-size: 2.5rem;
}
</style>
