<template>
  <div class="home">
        <div class="articles">
              <b-card
                title="Effect of Tv Series"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
               <b-card-text>
                Effect of tv series on people nowadays...
              </b-card-text>

            <b-button router-link to="/TV" variant="primary">Visit Article</b-button>
            </b-card>

          </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TV from '@/components/Tv.vue'

export default {
  name: 'home',
  components: {
    TV
  }
}
</script>

<style scoped>
#articles{
  align-content: space-between;
}
</style>
