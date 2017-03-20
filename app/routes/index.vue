<template lang="html">
    <div class="">
      <div class="welcome-card">
        <h1 class="welcome-card__header">Welcome to Ribbiter! <br> The world's second most popular Twitter</h1>

        <div class="options">
          <router-link v-bind:to="{ name: 'register' }" ><button class="options__item">Register</button></router-link>
          <router-link v-bind:to= "{ name: 'login' }" ><button class="options__item">Login</button></router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
