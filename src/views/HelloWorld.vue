<template lang="pug">
  v-layout(column align-center class="intro-header")
    v-flex(xs6)
      .intro-message
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
.intro-header {
  /* height: 100%; */
  margin-top: auto;
  margin-bottom: auto;
}
</style>
