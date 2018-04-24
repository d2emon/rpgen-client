<template lang="pug">
  v-app
    nav-sidebar
    app-header
    .app-body
      v-content
        v-container(fluid, fill-height, class="pa-0")
          // confirm-del
          // messages

          router-view
    app-footer
</template>

<script>
import { AppHeader, AppFooter, NavSidebar } from '@/components/'

export default {
  name: 'full',
  components: {
    AppHeader,
    AppFooter,
    NavSidebar
  }
}
</script>

<style lang="scss">
  @import './scss/_theme.scss';

  main {
    height: 100vh;
  }
</style>
