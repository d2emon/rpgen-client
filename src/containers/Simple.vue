<template lang="pug">
  v-app
    app-header
    .app-body
      v-content
        v-container(fluid fill-height py-0 px-5)
          // confirm-del
          // messages

          router-view
    app-footer
</template>

<script>
import { AppHeader, AppFooter } from '@/components/'

export default {
  name: 'full',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
  @import './scss/_theme.scss';

  main {
    height: 100vh;
  }
</style>
