<template>
  <div class="hello">
    <h1>{{ Title }}</h1>
    <b-card>
    <b-media no-body>
     

      <b-media-body class="ml-3">
        <h5 class="mt-0">Effect of tv series</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
          sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
          condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
        <p class="mb-0">
          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <br />
        <b-media>
          <h5 class="mt-0">About the Author</h5>
            <b-button href="#" variant="primary">Instagram</b-button>
        </b-media>
      </b-media-body>
    </b-media>
  </b-card>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    Title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
