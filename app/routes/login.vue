<template lang="html">
  <div class="">
    <div class="form-card">
      <h2 class="form-card__heading">Login</h2>
      <form v-on:submit.prevent="create" class="form-card__form">
        <label for="" class="label">Email</label>
        <!-- // Do these p's need classnames? -->
        <p class ="input__underline">
          <input type="text" placeholder="Email" class="input" v-model="formValues.email">
        </p>

        <label for="" class="label">Password</label>
        <p class ="input__underline">
          <input type="text" placeholder="Password" class="input" v-model="formValues.password">
        </p>

        <div class="button-flex">
          <router-link v-bind:to=" { name: 'register' }" ><button class="button-flex__button left">Register</button></router-link>
          <router-link v-bind:to=" { name: 'login' }"><button class="button-flex__button right">Login</button></router-link>
        </div>



      </form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        email: '',
        password: '',
      }
    };
  },

  methods: {

  },
};
</script>
