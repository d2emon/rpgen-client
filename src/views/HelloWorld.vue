<template lang="pug">
.intro-header
  v-container(fill-height)
    v-layout(column align-center)
      v-flex(xs12 fill-height class="intro-message")
        h1 {{ title }}
        h3 The best company in the world!
        hr.intro-divider
</template>

<script>
export default {
  data () {
    return {
      title: 'RPG-Helper'
    }
  },
  name: 'helloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro-divider {
  width: 400px;
  border-top: 1px solid #f8f8f8;
  border-bottom: 1px solid rgba(0,0,0,0.2);
}

.intro-header {
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  color: #f8f8f8;
  background: url(/static/images/intro-bg.jpg) no-repeat center center;
  background-size: cover;
  height: 100%;
  width: 100%;
}

.intro-message {
  position: relative;
  padding-top: 20%;
  padding-bottom: 20%;
}

.intro-message > h1 {
  margin: 0;
  text-shadow: 2px 2px 3px rgba(0,0,0,0.6);
  font-size: 5em;
}

.intro-message > h3 {
  text-shadow: 2px 2px 3px rgba(0,0,0,0.6);
  font-size: 24px;
}


</style>
