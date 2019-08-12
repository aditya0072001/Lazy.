<template>
<div id="nav">
    <b-nav tabs>
    <b-nav-item ><router-link to="/">Home</router-link></b-nav-item>
    <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
  </b-nav>
  <div id="app">
    <router-view/>
  </div>
</div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #14a9ff;
}
</style>
