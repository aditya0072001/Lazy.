<template>
  <div class="hello">
    <h1>{{ Title }}</h1>

     <b-media right-align vertical-align="center">
    <b-img slot="aside" blank blank-color="#ccc" width="80" alt="placeholder"></b-img>

    <h5 class="mt-0 mb-1">Effect of tv series</h5>
    <p class="mb-0">
        In the last two decades television has become the most powerful means of entertainment . 
 		I am sure you will agree with me that T.V has become an indispensable gadget in our homes.
		Many ads target children below 8 years as they are easily influenced by the audio -visual effects, particularly of advertisements
		Research shows that watching television starting at a young age can profoundly affect children's development. These <b>effects</b> include obesity, language delays, and learning disabilities. Physical inactivity while viewing <b>TV</b> reduces necessary exercise and leads to over-eating.
		<br>
		
		TV is not bad. When exposed to the right shows or programs, your child can learn good things. Research indicates that television can have a positive impact on children. It can help them change their behavior and attitude for good 
		 <br>
		  • A few television channels are dedicated to creating educational and informative content for the audience, especially children .<br>
		  • There are a few channels that broadcast only educational content covering subjects like art and craft, science, history, geography . TV is also a great medium that exposes children to different languages around the world.<br>
	
		<br>
		<b>2. Entertainment</b>
		TV is one of the primary sources of entertainment for kids. The sounds and colorful images on the screen appeal to children and also retain their attention. From movies to cartoon shows, there are several programs to keep children engaged.
		However, make sure that the content is appropriate for your kids, based on their age and level of understanding.
        <br>
		<b>3. Sports</b>
		The best way to expose your kids to sports is through TV. Encourage them to watch different sports like tennis, soccer, baseball and basketball, by co-viewing with them  and also knows game play rules.
		Negative Effects Of Television On Children
		TV affects children negatively as well. Unfortunately, the adverse effects to children
		
		    • Lack of proper physical activity and too much screen time can lead to vision problems.
			  • You cannot control what is shown on television. You may also not always be able to control what your kid watches on the TV.<br>
			  • Early exposure to inappropriate content that has sex, alcohol, and drugs, could bring up questions in children, the answers to which may be too complicated for them to understand. The worst part is that early exposure can even give them a distorted view of these elements.<br>
			  • Movies and other television shows may exaggerate reality and create extremely violent scenes online, which may be terrifying for kids.<br>

    </p>
  </b-media>
        <b-media>
          <h5 class="mt-0">About the Author</h5>
            <h6>Manish Kumar<br>Student St.Xavier's College,Patna</h6>
            <b-button href="https://instagram.com/mnsh25?igshid=mlerj62wkopk" variant="primary">Instagram</b-button>
        </b-media>
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
