<template>
  <v-container fluid>
    <v-layout column>
      <v-flex xs12 v-if="aliens.length">
        <v-toolbar color="indigo" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Миры</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon @click="loadAliens(true)">
            <v-icon>casino</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container fluid grid-list-md class="grey lighten-4">
          <v-layout row wrap>
            <v-flex
              v-for="alien in aliens"
              v-bind="{ [`xs${alien.flex}`]: true }"
              :key="alien.id"
            >
              <v-card>
                <v-card-text v-html="alien.text">
                </v-card-text>
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
      aliens: []
    }
  },
  methods: {
    generateFlex: function () {
      var flexes = [
        6,
        12
      ]
      var flex = Math.floor(Math.random() * flexes.length)
      return flexes[flex]
    },
    loadAliens: function (random) {
      var api = 'http://127.0.0.1:3000/aliens'
      if (random) {
        api += '?random=1&count=10'
      }
      this.axios.get(api).then((response) => {
        let aliens = response.data.aliens
        console.debug(response.data)
        this.aliens = []
        var rndFlex = true
        var flex = 0
        console.log(aliens)
        for (let i = 0; i < aliens.length; i++) {
          let alien = aliens[i]
          if (rndFlex) {
            flex = this.generateFlex()
            rndFlex = (flex !== 6)
          } else {
            flex = 6
            rndFlex = false
          }
          this.aliens.push({
            id: i,
            flex: flex,
            text: '<p>' + alien.replace(/([^>])\n/g, '$1</p><p>') + '</p>'
          })
        }
      })
    }
  },
  created: function () {
    this.loadAliens(false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

