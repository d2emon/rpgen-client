<template lang="pug">
  v-footer(
    app
    inset="true"
    fixed
  )
    v-layout(
      row
      wrap
      justify-center
    )
      v-btn(flat to="/home") Home
      v-btn(flat to="/auth/logout" v-if="authenticated") Logout
      v-btn(flat to="/auth/register" v-if="!authenticated") Register
      v-btn(flat to="/auth/login" v-if="!authenticated") Login
      v-flex(
        xs12
        py-3
        text-xs-center
        class="copyright text-muted small"
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

.copyright {
    margin: 15px 0 0;
}
</style>
