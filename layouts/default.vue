<template>
  <div id="app">
    <div class="row header">
      <div class="section">
        <nav>
          <logo />
          <label
            id="menu-toggle-label"
            for="menu-toggle"
          />
          <input
            id="menu-toggle"
            type="checkbox"
          >
          <ul class="menu">
            <li class="float-right">
              <nuxt-link
                to="/vital_css"
                class="float-right"
              >
                Vital CSS
              </nuxt-link>
            </li>
            <li class="float-right">
              <nuxt-link
                to="/"
                class="float-right"
              >
                Home
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="contents">
      <nuxt />
    </div>
    <div class="row footer">
      <div class="section center">
        <p>
          <i class="icon-logo-d gray i2x" />
          <br>
          <small>© 2019 Doximity, Inc</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../components/logo.vue';

export default {
  components: {
    logo,
  },
};
</script>
