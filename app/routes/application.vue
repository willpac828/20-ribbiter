<template lang="html">
  <div class="app">
    <header class="top-nav">
      <span class="top-nav__logo">Ribbeter</span>
      <ul class="nav-list">
        <li class="nav-list__item">Ribbets</li>
        <li class="nav-list__item">Frogs</li>
        <li class="nav-list__item">Login</li>
      </ul>
    </header>
    <main class="content">
      <div class="section">
        <div class="container">

          <router-view></router-view>
        </div>
      </div>
    </main>
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
