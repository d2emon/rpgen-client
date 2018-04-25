<template lang="pug">
header
  v-toolbar(
    app
    :fixed="fixed"
    :clipped-left="clipped"
    class="topnav px-5"
    height="50px"
  )
    // v-container(class="py-0")
    v-toolbar-title(
      :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'"
      class="ml-0 pl-3"
    )
      v-btn(
        flat
        class="toolbar-title"
        to="/"
        v-text="title"
      )
    v-spacer

    template(v-if="authenticated")
      v-btn(flat to="/user.after_login") Dashboard
      v-btn(flat to="/rpg/index") RPG
      v-menu(
        open-on-hover
        offset-y
      )
        v-btn(flat slot="activator") Systems <v-icon>arrow_drop_down</v-icon>
        v-list
          v-list-tile(to="/pathfinder")
            v-list-tile-title Pathfinder
          v-list-tile(to="/gurps")
            v-list-tile-title GURPS
          v-list-tile(to="/tnt")
            v-list-tile-title Tunels & Trolls
      v-btn(flat to="/world/world_list") Worlds
      v-btn(flat v-if="admin") Admin <span class="caret"></span>
      v-menu(
        open-on-hover
        offset-y
      )
        v-btn(flat slot="activator") Admin <v-icon>arrow_drop_down</v-icon>
        v-list
          v-list-tile(to="/admin/departments")
            v-list-tile-title Departments
          v-list-tile(to="/admin/roles")
            v-list-tile-title Roles
          v-list-tile(to="/admin/employees")
            v-list-tile-title Employees
      v-btn(flat to="/auth/logout") Logout
      v-btn(flat) <v-icon>person</v-icon> Hi, {{ username }}!
    template(v-else)
      v-btn(flat depressed small to="/home") Home
      v-btn(flat depressed small to="/auth/register") Register
      v-btn(flat depressed small to="/auth/login") Login
</template>

<script>
export default {
  name: 'app-header',
  data: () => ({
    authenticated: false,
    username: 'Username',

    links: [
      { title: 'Home', to: '/home'},
      { title: 'Register', to: '/auth/register'},
      { title: 'Login', to: '/auth/login'}
    ],

    clipped: true,
    fixed: true,
    title: 'RPG-Helper'
  })
}
</script>

<style scoped lang="scss">
@import "./scss/_colors.scss";

header {
  font-size: 14px;
}
.theme--light .btn {
  /* font-size: 14px; */
  text-transform: none;
  color: $links;
}
.theme--light .btn:hover {
  color: $linksHover;
}
</style>
