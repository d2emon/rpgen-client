<template>
  <v-navigation-drawer
    fixed
    permanent
    app
    :mini-variant="minified"
    :clipped="clipped"
    v-model="drawer"
    enable-resize-watcher
  >
    <v-list>
      <v-list-tile
        value="true"
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
      >
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'nav-sidebar',
  data: () => ({
    items: [
      {
        icon: 'public',
        title: 'Мир',
        to: '/worlds'
      },
      {
        icon: 'face',
        title: 'Персонаж',
        to: '/character'
      },
      {
        icon: 'face',
        title: 'Alien',
        to: '/aliens'
      }
    ],
    drawer: true,
    clipped: true,
    minified: false
  })
}
</script>
