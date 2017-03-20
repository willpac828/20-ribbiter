<template lang="html">
  <div class="">
    // display if condition meant
    <p v-if="users.loading === 'error'" class="">Could not create user</p>
    <div class="form-card">
      <h2 class="form-card__heading">Create an Account</h2>
      <form v-on:submit.prevent="create" class="form-card__form">
        <label for="" class="label">Username</label>
        <!-- // Do these p's need classnames? -->
        <p class ="input__underline">
          <input type="text" placeholder="Username" class="input" v-model="formValues.username">
        </p>

        <label for="" class="label">Email</label>
        <p class ="input__underline">
          <input type="text" placeholder="Email" class="input" v-model="formValues.email">
        </p>

        <label for="" class="label">Password</label>
        <p class ="input__underline">
          <input type="text" placeholder="Password" class="input" v-model="formValues.password">
        </p>

        <div class="button-flex">
          <button class="button-flex__button left">Login</button>
          <button class="button-flex__button right">Sign Up</button>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
import store from '../store';
import userResource from '../resources/user';

// need to define create in order to use it in our methods
const create = userResource.actionCreators.create;

export default {
  data() {
    return {
      users: this.$select('users'),
      formValues: {
        username: '',
        email: '',
        password: ''
      },
    };
  },

  methods: {
    // we name our method create because that's what we call it in our v-on
    create() {
      // dispatch is a store method.
      // we defined create above

      store.dispatch(create(this.formValues))
        .then(() => {
          this.$router.push({ name: 'users' });
        }).catch(() => {});
    },
  },
};
</script>
