<template lang="html">
  <div class="form-card">
    <h2 class="form-card__heading">Create an Account</h2>
    <form class="form-card__form">
      <label for="" class="label">Username</label>
      <!-- // Do these p's need classnames? -->
      <p>
        <input type="text" placeholder="Username" class="input">
      </p>

      <label for="" class="label">Email</label>
      <p>
        <input type="text" placeholder="Email" class="input">
      </p>

      <label for="" class="label">Password</label>
      <p>
        <input type="text" placeholder="Password" class="input">
      </p>

      <p>
        <button class="button left">Login</button>
        <button class="button right">Sign Up</button>
      </p>
    </form>

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
