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
      template(v-for="(link, id) in userLinks")
        v-menu(
          v-if="link.items"
          open-on-hover
          offset-y
          :key="id"
        )
          v-btn(flat small slot="activator") {{link.title}} <v-icon>arrow_drop_down</v-icon>
          v-list
            v-list-tile(
              v-for="(item, itemId) in link.items"
              :key="itemId"
              :to="item.to"
            )
              v-list-tile-title {{ item.title }}
        v-btn(
          v-else
          flat
          small
          :key="id"
          :to="link.to"
          v-text="link.title"
        )
      v-btn(flat) <v-icon>person</v-icon> Hi, {{ username }}!
    template(v-else v-for="(link, id) in guestLinks")
      v-btn(
        flat
        small
        :key="id"
        :to="link.to"
        v-text="link.title"
      )
</template>

<script>
export default {
  name: 'app-header',
  data: () => ({
    authenticated: false,
    username: 'Username',

    userLinks: [
      { title: 'Dashboard', to: '/user.after_login' },
      { title: 'RPG', to: '/rpg' },
      {
        title: 'Systems',
        items: [
          { title: 'Pathfinder', to: '/pathfinder' },
          { title: 'GURPS', to: '/gurps' },
          { title: 'Tunels & Trolls', to: '/tnt' }
        ]
      },
      { title: 'Worlds', to: '/worlds' },
      {
        admin: true,
        title: 'Admin',
        items: [
          { title: 'Departments', to: '/admin/departments' },
          { title: 'Roles', to: '/admin/roles' },
          { title: 'Employees', to: '/admin/employees' }
        ]
      },
      { title: 'Logout', to: '/auth/logout' }
    ],
    guestLinks: [
      { title: 'Home', to: '/home' },
      { title: 'Register', to: '/auth/register' },
      { title: 'Login', to: '/auth/login' }
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
</style>
