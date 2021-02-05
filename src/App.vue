<template>
  <div id="app">
    <img src="./assets/logo.jpg" class="logo" />
    <search />
    <div class="footer">
      <p>JL Harvey Projects 2021</p>
    </div>
  </div>
</template>

<script>
import search from "./components/Search";

export default {
  name: "App",
  components: {
    search,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  background: #202224;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: #202224;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #000000;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.logo {
  padding-top: 15px;
  width: 75%;
  max-width: 512px;
  object-fit: cover;
}
.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
