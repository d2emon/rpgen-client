<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>

    <v-layout column>
      <v-flex xs12 v-if="worlds.length">
        <v-toolbar color="indigo" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Discover</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon @click="loadWorlds(true)">
            <v-icon>casino</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container fluid grid-list-md class="grey lighten-4">
          <v-layout row wrap>
            <v-flex
              v-for="world in worlds"
              v-bind="{ [`xs${world.flex}`]: true }"
              :key="world.id"
            >
              <v-card>
                <v-card-media
                  :src="world.src"
                  height="200px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="world.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{ world.title }}</div>
                    <span class="grey--text">{{ world.subtitle }}</span>
                  </div>
                </v-card-title>
                <v-card-actions class="white">
                  <v-btn flat>Share</v-btn>
                  <v-btn flat color="purple">Explore</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                  <v-btn icon @click.native="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-slide-y-transition>
                  <v-card-text v-show="show">
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                  </v-card-text>
                </v-slide-y-transition>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      show: null,
      worlds: []
    }
  },
  name: 'helloWorld',
  methods: {
    loadWorlds: function (random) {
      var api = 'http://127.0.0.1:3000/worlds'
      if (random) {
        api += '?random=1&count=10'
      }
      this.axios.get(api).then((response) => {
        let worlds = response.data.worlds
        console.debug(response.data)
        var images = [
          'house.jpg',
          'road.jpg',
          'plane.jpg',
          'sunshine.jpg'
        ]
        var flexes = [
          6,
          12
        ]
        this.worlds = []
        var rndFlex = 1
        for (let i = 0; i < worlds.length; i++) {
          let rndImage = Math.floor(Math.random() * (images.length - 1))
          let flex = 0
          if (rndFlex == 0) {
            rndFlex = 1
          }else{
            rndFlex = Math.floor(Math.random() * flexes.length)
            flex = rndFlex
          }
          
          this.worlds.push({
            id: i,
            title: worlds[i],
            subtitle: '1,000 miles of wonder',
            src: '/static/images/' + images[rndImage],
            flex: flexes[flex]
          })
        }
      })
    }
  },
  created: function () {
    this.loadWorlds(false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
