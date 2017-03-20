<template lang="html">
  <div class="">
    <div class="section">
      <div class="container">
        <h1 class="section__header">Users</h1>
        <div class="grid">

          <div class="grid__item">
            <div class="user-card">
              <img src="http://www.placecera.com/100/100" alt="" class="user-card__pic">
              <div class="card-info">
                <h2 class="card-info__name">Michael Cera</h2>
                <p class="card-info__username">Cera12</p>
              </div>
            </div>

          </div>
          <div class="grid__item">
            <div class="user-card">
              <img src="http://www.placecera.com/100/100" alt="" class="user-card__pic">
              <div class="card-info">
                <h2 class="card-info__name">Michael Cera</h2>
                <p class="card-info__username">Cera12</p>
              </div>
            </div>

          </div>
          <div class="grid__item">
            <div class="user-card">
              <img src="http://www.placecera.com/100/100" alt="" class="user-card__pic">
              <div class="card-info">
                <h2 class="card-info__name">Michael Cera</h2>
                <p class="card-info__username">Cera12</p>
              </div>
            </div>

          </div>
          <div class="grid__item">
            <div class="user-card">
              <img src="http://www.placecera.com/100/100" alt="" class="user-card__pic">
              <div class="card-info">
                <h2 class="card-info__name">Michael Cera</h2>
                <p class="card-info__username">Cera12</p>
              </div>
            </div>

          </div>
          <div class="grid__item">
            <div class="user-card">
              <img src="http://www.placecera.com/100/100" alt="" class="user-card__pic">
              <div class="card-info">
                <h2 class="card-info__name">Michael Cera</h2>
                <p class="card-info__username">Cera12</p>
              </div>
            </div>

          </div>
          <div class="grid__item">
            <div class="user-card">
              <img src="http://www.placecera.com/100/100" alt="" class="user-card__pic">
              <div class="card-info">
                <h2 class="card-info__name">Michael Cera</h2>
                <p class="card-info__username">Cera12</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
// import userResource.findAll from '../resources/user';
export default {
  data() {
    return {
    };
  },

  methods: {

  },

  mounted() {
    store.dispatch(findAll());
  }
};
</script>
