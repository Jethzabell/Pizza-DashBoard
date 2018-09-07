<template>
  <header class="row">
    <nav class="navbar navbar-toggleable-md navbar-light">
      <a class="navbar-brand" href="/">PIZZA PLANET</a>
      <ul class="navbar-nav">
        <router-link :to="{ name: 'homeLink' }" tag="li"><a class="nav-link">home</a></router-link>
        <router-link :to="{ name: 'menuLink' }"><a class="nav-link">menu</a></router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {

  }
//se remueve por que ahora usamos :to="{ name: 'homeLink'}"
/*export default {
  data(){
      return{
          homeLink: '/',
          menuLink: '/menu'
      }
  }
}*/
</script>

<style>
  header {
    margin-bottom: 20px;
  }

  .navbar-brand {
    font-size: 1.5em;
  }
</style>