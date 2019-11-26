<template>
  <div id="app">
    <div class="row header">
      <div class="section">
        <nav>
          <logo />
          <label for="menu-toggle" id="menu-toggle-label" />
          <input id="menu-toggle" type="checkbox" />
          <ul class="menu">
            <li class="float-right">
              <a href="#" class="float-right">All Articles</a>
            </li>
            <li class="float-right">
              <a href="/" class="float-right">Home</a>
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
          <br />
          <small>© 2019 Doximity, Inc</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>
