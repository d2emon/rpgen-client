<template lang="pug">
  v-footer(
    app
    inset
    fixed
    class="px-5"
  )
    v-layout(
      row
      wrap
      justify-center
    )
      v-btn(flat small to="/home") Home
      template(v-if="authenticated")
        v-btn(flat small to="/auth/logout") Logout
      template(v-else)
        v-btn(flat small to="/auth/register") Register
        v-btn(flat small to="/auth/login") Login
      v-flex(
        xs12
        py-0
        mt-1
        text-xs-center
        class="copyright grey--text text--darken-1 caption"
      ) Copyright &copy; {{year}}/ All Rights Reserved
</template>

<script>
export default {
  name: 'app-header',
  data: () => ({
    authenticated: false,
    // current_user.is_authenticated
    year: 2018
  })
}
</script>

<style scoped lang="scss">
@import "./scss/_colors.scss";

footer {
  padding: 50px 0;
  background-color: $footerColor;
}
.theme--light .btn {
  /* font-size: 14px; */
  text-transform: none;
  color: $links;
}
.theme--light .btn:hover {
  color: $linksHover;
}

.copyright {
  // font-size: 85%;
}
</style>
