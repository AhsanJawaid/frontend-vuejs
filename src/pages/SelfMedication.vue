<template>
  <div class="home">
    <h1>{{ greeting }}</h1>
    <div v-for="item in myJson" class="post">
      <h2>ID: {{ item.id }}</h2>
      <p>Name: {{ item.name }}</p>
      <p>Slug: {{ item.slug }}</p>
    </div>
    <button @click="goToUsers" class="btn">{{ buttonText }}</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ROUTES } from '../constants/routes.js';
import axios from 'axios';

export default defineComponent({
  name: 'SelfMedication',
  data() {
    return {
      // No reactive data needed for this component
      myJson: [],
    }
  },
  computed: {
    greeting() {
      return 'Self Medication Data';
    },
    buttonText() {
      return 'Go to Users'
    },
  },
  async mounted() {
    this.fetchData();
  },
  methods: {
    goToUsers() {
      this.$router.push(ROUTES.USERS)
    },
    goToLogin() {
      this.$router.push(ROUTES.LOGIN)
    },
    async fetchData() {
      try {
        // const url = 'http://localhost:3000/api/get-self-medication';
        const url = 'https://apidb.dvago.pk/AppAPIV3/GetSelfMedication';
        const response = await axios.get(url);
        this.myJson = response.data.Data;
      } catch (err) {
        this.error = 'Failed to fetch user data: ' + err.message;
        console.error(err);
      }
    },
  }
})
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

h1 {
  font-size: 4rem;
  margin-bottom: 2rem;
  color: #42b883;
}

.btn {
  padding: 12px 24px;
  font-size: 1.2rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #369870;
}
</style> 