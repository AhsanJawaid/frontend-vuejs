<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Log In</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === 'password') {
        alert('Login successful!');
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 50px auto;
  font-family: Arial, sans-serif;
}
input {
  width: 100%;
  padding: 8px;
  margin: 5px 0 15px;
}
button {
  width: 100%;
  padding: 10px;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>