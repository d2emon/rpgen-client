<template>
  <v-container fluid>
    <v-layout column>
      <v-flex xs12 v-if="characters.length">
        <v-toolbar color="indigo" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Персонажи</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon @click="loadCharacters(true)">
            <v-icon>casino</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container fluid grid-list-md class="grey lighten-4">
          <v-layout row wrap>
            <v-flex
              v-for="character in characters"
              v-bind="{ [`xs${character.flex}`]: true }"
              :key="character.id"
            >
              <v-card>
                <v-card-media
                  :src="character.src"
                  height="200px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="character.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{ character.title }}</div>
                    <span class="grey--text">{{ character.subtitle }}::{{ character.sex }}</span>
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
                  <v-btn icon @click.native="character.show = !character.show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-slide-y-transition>
                  <v-card-text v-show="character.show" v-html="character.description">
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
  name: 'charGen',
  data () {
    return {
      characters: []
    }
  },
  methods: {
    loadCharacters: function (random) {
      var api = 'http://127.0.0.1:3000/characters'
      if (random) {
        api += '?random=1&count=10'
      }
      var sexImg = [
        '',
        '/static/images/characters/female.jpeg',
        '/static/images/characters/male.png',
        ''
      ]
      this.axios.get(api).then((response) => {
        let characters = response.data.characters
        console.debug(response.data)
        var flexes = [
          6,
          12
        ]
        this.characters = []
        var rndFlex = 1
        for (let i = 0; i < characters.length; i++) {
          let character = characters[i]
          let flex = 0
          if (!rndFlex) {
            rndFlex = 1
          } else {
            rndFlex = Math.floor(Math.random() * flexes.length)
            flex = rndFlex
          }
          character.id = i
          character.flex = flexes[flex]
          character.title = character.name
          character.show = false
          character.src = sexImg[character.sex]
          character.description = '<p>' + character.clothing.replace(/([^>])\n/g, '$1</p><p>') + '</p>';
          this.characters.push(character)
        }
      })
    }
  },
  created: function () {
    this.loadCharacters(true)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

