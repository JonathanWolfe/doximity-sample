<template>
  <div id="app">
    <div class="row header">
      <div class="section">
        <nav>
          <logo />
          <label for="menu-toggle" id="menu-toggle-label"></label>
          <input id="menu-toggle" type="checkbox">
          <ul class="menu">
            <li class="float-right"><a href="#">Articles</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <nuxt />
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
